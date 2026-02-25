import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_dpxz0x9",
      "template_r62xsrf",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "JEkmzqwh-ueKML03m"
    )
      .then(() => {
        setSent(true);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.log(err);
        alert("Email failed. Check console.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative bg-[#050505] text-white py-28 px-6 overflow-hidden">

      {/* VIDEO BG */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/skill.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl font-light mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            I’m always open to discussing new opportunities, collaborations,
            or freelance projects. If you have an idea or a role that fits
            my skills, feel free to reach out.
          </p>

          <div className="space-y-4 pt-4">

            {/* EMAIL */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-transparent border border-white/10 backdrop-blur-md hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition">
              <div className="text-purple-400 text-xl">📧</div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">rahulroy0307@gmail.com</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-transparent border border-white/10 backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition">
              <div className="text-blue-400 text-xl">📍</div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">India</p>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-transparent border border-white/10 backdrop-blur-md hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition">
              <div className="text-green-400 text-xl">💼</div>
              <div>
                <p className="text-gray-400 text-sm">Availability</p>
                <p className="text-white">Full-time / Freelance</p>
              </div>
            </div>

            {/* RESUME BUTTON */}
            <div className="pt-6">
              <a
                href="/Rahul-Roy-Resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition duration-300"
              >
                Download Resume
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative rounded-2xl p-8 bg-transparent border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
    {sent && (
            <div className="mb-6 text-center py-3 rounded-lg bg-blue-500/20 border border-green-500/30 text-purple-400">
              ✅ Message sent successfully!
            </div>
          )}
          {/* glow */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-3xl rounded-full top-[-120px] left-1/2 -translate-x-1/2"></div>
          </div>

          <form onSubmit={sendEmail} className="relative space-y-6">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 rounded-lg font-medium transition hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;