import { useRef, useState, useEffect } from "react";
import {
  FaReact, FaAngular, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiPostman
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function Skills() {

  const skills = [
    { name: "React", info: "Hooks, Context, SPA, APIs", icon: <FaReact /> },
    { name: "Angular", info: "Components, Services, RxJS", icon: <FaAngular /> },
    { name: "Next.js", info: "SSR, Routing, Performance", icon: <SiNextdotjs /> },
    { name: "JavaScript", info: "ES6+, Async, DOM", icon: <IoLogoJavascript /> },
    { name: "Node.js", info: "APIs, Express, Auth", icon: <FaNodeJs /> },
    { name: "MongoDB", info: "Schema, Queries, Atlas", icon: <SiMongodb /> },
    { name: "Git", info: "Version control, branching", icon: <FaGitAlt /> },
    { name: "Postman", info: "API testing, debugging", icon: <SiPostman /> }
  ];

  const loopSkills = [...skills, ...skills, ...skills, ...skills];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  /* start from middle */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft = container.scrollWidth / 3;
    setTimeout(() => handleScroll(), 100);
  }, []);

  /* detect center card */
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.offsetWidth / 2;
    const children = Array.from(container.children);

    let closest = 0;
    let closestDistance = Infinity;

    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < closestDistance) {
        closest = i;
        closestDistance = dist;
      }
    });

    setActiveIndex(closest % skills.length);
  };

  /* auto scroll loop */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame;

    const scroll = () => {
      if (!isHovering) {
        container.scrollLeft += 0.5;

        const max = container.scrollWidth * 0.66;
        const min = container.scrollWidth * 0.33;

        if (container.scrollLeft > max || container.scrollLeft < min) {
          container.scrollLeft = container.scrollWidth / 3;
        }
      }

      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [isHovering]);

  /* mouse drag scroll */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const down = (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const up = () => isDown = false;
    const leave = () => isDown = false;

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", down);
    container.addEventListener("mouseleave", leave);
    container.addEventListener("mouseup", up);
    container.addEventListener("mousemove", move);

    return () => {
      container.removeEventListener("mousedown", down);
      container.removeEventListener("mouseleave", leave);
      container.removeEventListener("mouseup", up);
      container.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section id="skills" className="relative overflow-hidden text-white py-28 px-6">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/skill.mp4" type="video/mp4" />
      </video>

      <div className="relative max-w-6xl mx-auto">

        <h2 className="text-4xl font-light text-center mb-16">
          Skills
        </h2>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex gap-10 overflow-x-auto snap-x snap-mandatory pt-16 pb-20 items-center scrollbar-hide"
        >

          {loopSkills.map((skill, i) => {

            const isActive = activeIndex === i % skills.length;

            return (
              <div
                key={i}
                className="min-w-[260px] snap-center perspective-[1200px]"
              >

               <div
  className={`relative w-full h-56 transition-transform duration-700 ease-[cubic-bezier(.25,.8,.25,1)]
  preserve-3d
  ${isActive ? "rotate-y-180 scale-110" : "scale-95 opacity-60"}
  `}
>

  {/* FRONT */}
  <div
    className={`absolute inset-0 rounded-2xl border bg-white/5 backdrop-blur-xl
    flex flex-col items-center justify-center gap-4 text-xl
    backface-hidden transition-all duration-500
    ${isActive
      ? "border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
      : "border-white/10"
    }`}
  >
    <div className="text-3xl text-purple-400">
      {skill.icon}
    </div>
    {skill.name}
  </div>

  {/* BACK */}
  <div
    className="absolute inset-0 rotate-y-180 rounded-2xl border border-purple-500/40
    bg-white/5 backdrop-blur-xl flex items-center justify-center text-center px-6 text-gray-300
    backface-hidden shadow-[0_0_30px_rgba(168,85,247,0.4)]"
  >
    {skill.info}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;
