import { useScreenShare } from "../hooks/useScreenShare";
import { useNavigate } from "react-router-dom";

export default function ScreenTest() {
  const { videoRef, status, startSharing, resolution, displayType } =
    useScreenShare();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Screen Test</h2>

      {status === "idle" && (
        <button onClick={startSharing}>Start Screen Sharing</button>
      )}

      {status === "requesting" && <p>Requesting permission...</p>}
      {status === "denied" && <p>Permission denied</p>}
      {status === "cancelled" && <p>User cancelled</p>}
      {status === "error" && <p>Unknown error</p>}
      {status === "stopped" && <p>Screen sharing stopped</p>}

      {status === "granted" && (
        <>
          <p>Resolution: {resolution}</p>
          <p>Display Type: {displayType}</p>
        </>
      )}

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "80%", marginTop: "20px", border: "1px solid black" }}
      />

      {(status === "stopped" || status === "denied" || status === "error") && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={startSharing}>Retry</button>
          <button onClick={() => navigate("/")}>Back Home</button>
        </div>
      )}
    </div>
  );
}
