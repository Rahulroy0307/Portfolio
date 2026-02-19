import { useEffect, useState } from "react";

function Hero() {
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 600);
    setTimeout(() => setShowButtons(true), 1400);
  }, []);

  return (
    <section className="animate-fadeIn relative min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden">
 {/* Robot video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/robot.mp4" type="video/mp4" />
      </video>
      {/* Glow background */}
      <div className="absolute w-[650px] h-[650px] bg-purple-700/40 rounded-full blur-[160px] animate-blob"></div>
      <div className="absolute w-[550px] h-[550px] bg-blue-700/40 rounded-full blur-[160px] translate-x-40 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative text-center px-6">

        <h1 className={`text-5xl md:text-6xl font-light tracking-wide transition-all duration-700 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Hello There</h1>
   <h2 className={`text-5xl md:text-6xl font-light tracking-wide transition-all duration-700 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Welcome to my website</h2>
        

        <p className={`mt-4 text-gray-400 text-lg transition-all duration-700 delay-200 ${showText ? "opacity-100" : "opacity-0"}`}>
          Hi! I'm Rahul Roy, an aspiring Full Stack Developer. I like to build and learn new things simultaneously.
        </p>

        <div className={`mt-8 flex gap-4 justify-center transition-all duration-700 ${showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a href="#projects" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">
            View Work
          </a>

          <a href="#contact" className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black">
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center text-gray-500">
        <div className="w-[2px] h-10 bg-gray-600 relative overflow-hidden">
          <div className="w-full h-4 bg-white absolute animate-scroll"></div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
