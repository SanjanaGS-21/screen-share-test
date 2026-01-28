import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();
  const isSupported = !!navigator.mediaDevices?.getDisplayMedia;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* HEADER */}
      <header className="border-b border-cyan-900/30 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-sm tracking-wider">SCREEN.TEST</span>
          </div>
          <nav className="flex flex-col items-center gap-1 text-sm justify-self-center">
            <a href="#features" className="text-white hover:text-cyan-400 transition">Features</a>
            <a href="#how" className="text-white hover:text-cyan-400 transition">How It Works</a>
          </nav>
          <div />
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-700/50 rounded-sm text-cyan-400 text-xs font-semibold mb-6 tracking-wider">
              BROWSER TESTING
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Test Your Screen
              <span className="text-cyan-400"> Sharing</span>
            </h1>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md">
              Verify browser permissions, view live screen capture, and access detailed resolution metrics in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {isSupported ? (
                <Button
                  onClick={() => navigate("/screen-test")}
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-semibold"
                >
                  Launch Test
                </Button>
              ) : (
                <div className="text-red-400 text-sm font-semibold">Browser not supported</div>
              )}
              <Button
                variant="secondary"
                size="lg"
                className="border border-slate-700 hover:border-cyan-600 hover:text-cyan-400"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT: Status Box */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${
                isSupported 
                  ? 'bg-green-900/30 border border-green-700/50' 
                  : 'bg-red-900/30 border border-red-700/50'
              }`}>
                {isSupported ? '✓' : '✕'}
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  {isSupported ? 'Ready to Test' : 'Not Supported'}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {isSupported 
                    ? 'Your browser supports screen sharing APIs'
                    : 'Use Chrome, Edge, or Firefox'
                  }
                </p>
              </div>
            </div>
            <div className="space-y-3 border-t border-slate-700 pt-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Permission Check</span>
                <span className={isSupported ? 'text-green-400' : 'text-red-400'}>Ready</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Video Stream</span>
                <span className={isSupported ? 'text-green-400' : 'text-red-400'}>Available</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Resolution Data</span>
                <span className={isSupported ? 'text-green-400' : 'text-red-400'}>Detectable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-slate-800/50 border-t border-b border-slate-700 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-600/50 transition">
              <div className="text-2xl mb-4">📹</div>
              <h4 className="font-semibold text-lg mb-2">Live Preview</h4>
              <p className="text-slate-400 text-sm">View your screen capture in real-time with zero latency.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-600/50 transition">
              <div className="text-2xl mb-4">📊</div>
              <h4 className="font-semibold text-lg mb-2">Detailed Metrics</h4>
              <p className="text-slate-400 text-sm">Get exact resolution, frame rate, and display type information.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-600/50 transition">
              <div className="text-2xl mb-4">⚙️</div>
              <h4 className="font-semibold text-lg mb-2">Full Control</h4>
              <p className="text-slate-400 text-sm">Start, stop, and retry screen sharing with instant controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600/20 border border-cyan-600/50 flex items-center justify-center mx-auto mb-4 font-bold text-cyan-400">1</div>
            <h4 className="font-semibold mb-2">Click Start</h4>
            <p className="text-slate-400 text-sm">Launch the test and prepare to share</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600/20 border border-cyan-600/50 flex items-center justify-center mx-auto mb-4 font-bold text-cyan-400">2</div>
            <h4 className="font-semibold mb-2">Grant Permission</h4>
            <p className="text-slate-400 text-sm">Select your screen or window</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600/20 border border-cyan-600/50 flex items-center justify-center mx-auto mb-4 font-bold text-cyan-400">3</div>
            <h4 className="font-semibold mb-2">View Preview</h4>
            <p className="text-slate-400 text-sm">See live capture and metrics</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600/20 border border-cyan-600/50 flex items-center justify-center mx-auto mb-4 font-bold text-cyan-400">4</div>
            <h4 className="font-semibold mb-2">Stop Anytime</h4>
            <p className="text-slate-400 text-sm">End session with one click</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-800/50 py-8 text-center text-slate-400 text-sm">
        <p>Screen Share Testing Tool</p>
      </footer>
    </div>
  );
}
