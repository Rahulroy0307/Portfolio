import Reveal from "../components/Reveal";

function Projects() {

  const projects = [
    {
      title: "Krazy-For-Nuts",
      img: "/p1.png",
      desc: "Full-stack e-commerce platform built with React and Firebase. Includes authentication, product catalog, cart system, and order tracking.",
      tech: ["React", "Firebase", "CSS"],
      github: "https://github.com/RahulRoy0307/Krazy-For-Nuts",
      live: "https://krazyfornuts.com/"
    },
    {
  title: "Personal Portfolio Website",
  img: "/portfolio.png",   // add screenshot in public folder
  desc: "Modern developer portfolio built with React + Vite. Includes animated hero section, reveal effects, skills carousel, project showcase, and EmailJS contact integration.",
  tech: ["React", "Vite", "Tailwind", "EmailJS"],
  github: "https://github.com/YOUR_GITHUB_LINK",
  live: "https://YOUR_PORTFOLIO_LINK"
},
{
  title: "SPA Rituals Website",
  img: "/spa.png",   // add screenshot in public folder
  desc: "Responsive spa & wellness website built with modern UI design. Features smooth layout, service sections, clean navigation, and optimized user experience.",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/Rahulroy0307/spa",
  live: "https://spa-tau-ecru.vercel.app/"   // add live link if deployed (Netlify/Vercel etc.)
},


    {
      title: "Stock Watchlist Lite",
      img: "/p2.png",
      desc: "Lightweight stock tracking app using React + Vite. Features search, sorting, modular components, and optimized rendering.",
      tech: ["React", "Vite", "Vitest"],
      github: "https://github.com/RahulRoy0307/stock-watchlist-lite",
      live: "https://stock-watchlist-lite-two.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden min-h-screen scroll-mt-24 bg-[#050505] text-white py-28 px-6">
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
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-light text-center mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 150}>

              <div
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition duration-500 hover:translate-y-[-6px] hover:border-purple-500/40"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                }}
              >

                {/* spotlight */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div
                    className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full"
                    style={{
                      left: "var(--x)",
                      top: "var(--y)",
                      transform: "translate(-50%, -50%)"
                    }}
                  />
                </div>

                {/* preview image */}
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* content */}
                <div className="p-6">

                  <h3 className="text-xl mb-2 font-medium">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      className="px-4 py-2 text-sm bg-purple-600 rounded-md transition hover:bg-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                    >
                      Live Demo
                    </a>

                    <a
                      href={p.github}
                      target="_blank"
                      className="px-4 py-2 text-sm border border-white/20 rounded-md transition hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                    >
                      GitHub
                    </a>
                  </div>

                </div>

              </div>

            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
