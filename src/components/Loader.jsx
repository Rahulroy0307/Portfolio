import { useEffect, useState } from "react";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);

          // start fade out
          setFade(true);

          // wait for fade animation, then show site
          setTimeout(onFinish, 700);
          return 100;
        }
        return p + 1.5;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
<div className={`fixed inset-0 bg-[#050505] flex flex-col items-center justify-center text-white z-[999] transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"}`}>

      {/* glow blobs */}
      <div className="absolute w-[650px] h-[650px] bg-purple-700/40 rounded-full blur-[160px] animate-blob"></div>
<div className="absolute w-[550px] h-[550px] bg-blue-700/40 rounded-full blur-[160px] translate-x-40 animate-blob animation-delay-2000"></div>

      {/* content */}
      <div className="relative text-center">

        <h1 className="text-3xl font-light mb-3 tracking-wide">
          Rahul Roy
        </h1>

        <p className="text-gray-400 mb-6 text-sm">
          Loading Portfolio...
        </p>

        {/* premium glowing progress bar */}
        <div className="w-64 h-[4px] bg-black border border-white/10 rounded overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-3 text-gray-500 text-xs">
          {Math.floor(progress)}%
        </p>
      </div>
    </div>
  );
}

export default Loader;
