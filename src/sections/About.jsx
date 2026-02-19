import Reveal from "../components/Reveal";
function About() {
    return (
        <section id="about" className="relative h-screen scroll-mt-24 bg-[#050505] text-white py-28 px-6">
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
            <Reveal delay={500}>
            <div className="max-w-6xl mx-auto">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Robot with neon ring */}
                    <div className="flex justify-center relative group">

                        <div className="absolute w-4 h-4 bg-purple-500 rounded-full top-15 left-1 float-dot"></div>
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-1 right-15 float-dot"></div>

                        {/* base glow */}
                         <div className="absolute w-80 h-80 rounded-full bg-purple-600/30 blur-3xl transition-all duration-500"></div>

                        {/* floating dots */}
                        <div className="absolute w-3 h-3 bg-purple-500 rounded-full top-10 left-10 float-dot"></div>
                        <div className="absolute w-2 h-2 bg-blue-500 rounded-full bottom-12 right-10 float-dot"></div>

                        {/* hover glow */}
                       <div className="absolute w-96 h-96 rounded-full bg-purple-600/0 blur-3xl transition-all duration-500 group-hover:bg-purple-600/40"></div>

                        {/* neon ring */}
                        <div className="absolute w-70 h-70 rounded-full border border-purple-500/40 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]"></div>

                        {/* image wrapper */}
                        <div className="relative w-72 h-72 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">

                            <img
                                src="/robot.jpg"
                                alt="avatar"
                               className="w-[125%] h-[125%] object-cover translate-y-2 transition duration-500 group-hover:brightness-110"
                            />

                        </div>

                    </div>


                    {/* RIGHT — Text content */}
                    <div>

                        <h2 className="text-4xl font-light mb-6">
                            About Me
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-6">
                            I’m a Full-Stack Developer with experience building modern web
                            applications using React, Node.js, and MongoDB. I enjoy creating
                            scalable solutions, improving performance, and designing clean UI
                            experiences that users love.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-8">
                            During my internship, I worked on production-ready applications
                            including booking systems, API integrations, and responsive
                            frontend optimization.
                        </p>

                        {/* buttons */}
                        <div className="flex gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-2 rounded-lg bg-purple-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] hover:bg-purple-500"

                            >
                                View Projects
                            </a>

                            <a
                                href="/Rahul-Roy-Resume.pdf"
                                className="px-6 py-2 rounded-lg border border-white/20 transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_18px_rgba(168,85,247,0.6)]"
                            >
                                Download CV
                            </a>
                        </div>

                    </div>

                </div>
            </div>
            </Reveal>
        </section>
    );
}

export default About;
