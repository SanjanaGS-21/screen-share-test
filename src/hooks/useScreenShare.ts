import { useEffect, useRef, useState, useCallback } from "react";

export type ScreenStatus =
  | "idle"
  | "requesting"
  | "granted"
  | "denied"
  | "cancelled"
  | "error"
  | "stopped";

export function useScreenShare() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const trackEndedListenerRef = useRef<(() => void) | null>(null);

  const [status, setStatus] = useState<ScreenStatus>("idle");
  const [resolution, setResolution] = useState("");
  const [displayType, setDisplayType] = useState("");

  // Robust cleanup function that prevents memory leaks
  const cleanup = useCallback(() => {
    // Stop all tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      streamRef.current = null;
    }

    // Clear video element and remove event listeners
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    // Remove track ended listener if it exists
    if (trackEndedListenerRef.current) {
      trackEndedListenerRef.current = null;
    }

    // Reset metadata
    setResolution("");
    setDisplayType("");
  }, []);

  const startSharing = useCallback(async () => {
    try {
      // Clean up any existing stream before starting new one
      cleanup();
      
      setStatus("requesting");

      // Request display media with specified constraints
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 30 } },
        audio: false,
      });

      // Store stream reference
      streamRef.current = stream;
      setStatus("granted");

      // Get video track and its settings
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        const settings = videoTrack.getSettings();

        // Set resolution and display type metadata
        setResolution(`${settings.width} x ${settings.height}`);
        setDisplayType(
          settings.displaySurface
            ? settings.displaySurface.charAt(0).toUpperCase() + settings.displaySurface.slice(1)
            : "Unknown"
        );

        // Handle stream lifecycle - detect when user stops screen sharing
        const handleTrackEnded = () => {
          setStatus("stopped");
          cleanup();
        };

        trackEndedListenerRef.current = handleTrackEnded;
        videoTrack.onended = handleTrackEnded;
      }

      // Attach stream to video element
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err: unknown) {
      // Distinguish between different error types
      if (err instanceof DOMException) {
        switch (err.name) {
          case "NotAllowedError":
            setStatus("denied");
            break;
          case "AbortError":
            setStatus("cancelled");
            break;
          default:
            setStatus("error");
        }
      } else {
        setStatus("error");
      }
      
      // Ensure cleanup happens on error
      cleanup();
    }
  }, [cleanup]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return {
    videoRef,
    status,
    startSharing,
    resolution,
    displayType,
  };
}
