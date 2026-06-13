import { useState, useEffect } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import samuelImg from "../imports/Samuel.png";
import alexImg from "../imports/Alex.png";
import heroSlide from "../imports/Slide_35.png";
import aboutImg from "../imports/IMG_3972.jpg";
const GALLERY_IMAGE = "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&h=900&fit=crop&auto=format";

const features = [
  {
    index: "01",
    title: "Intuitive Immersive Design",
    body: "Step into MindGallery, where you can manipulate models with natural, fluid gestures. Drag to position, rotate to find the perfect angle, and pinch to magnify or scale. Combine gestures simultaneously for a seamless, tactile layout experience.",
  },
  {
    index: "02",
    title: "Precision Editing View",
    body: "Take full control of every element. Select any 3D model within your scene to instantly swap out the artwork photo, experiment with different frame styles, or adjust dimensions to match real-world specifications.",
  },
  {
    index: "03",
    title: "Zero-Waste Workflow",
    body: "Eliminate the need for costly test prints and resource-heavy trial runs. Preview how your art looks in real-time, instantly adjusting composition and scale.",
  },
  {
    index: "04",
    title: "Protect the Space",
    body: "Stop moving heavy art back and forth or drilling unnecessary holes. Map out your entire exhibition digitally to ensure your first physical installation is your final one.",
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        letterSpacing: "0.12em",
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-black/10" : "bg-transparent"
      }`}
    >
      <span
        className="uppercase text-xs tracking-widest text-black select-none"
        style={{ letterSpacing: "0.22em" }}
      >
        MindGallery
      </span>
      <a
        href="#support"
        className="uppercase text-xs text-black border border-black px-5 py-2 hover:bg-black hover:text-white transition-colors duration-300"
        style={{ letterSpacing: "0.18em" }}
      >
        Support
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <ImageWithFallback
        src={heroSlide}
        alt="MindGallery spatial exhibition preview"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55)" }}
      />
      <div className="relative z-10 text-center px-8">
        <p
          className="uppercase text-white/60 text-xs mb-8"
          style={{
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            letterSpacing: "0.32em",
          }}
        >
          For Apple Vision Pro
        </p>
        <h1
          className="text-white uppercase"
          style={{
            fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontSize: "clamp(3rem, 10vw, 9rem)",
            fontWeight: 300,
            letterSpacing: "0.18em",
            lineHeight: 0.9,
          }}
        >
          Mind
          <br />
          Gallery
        </h1>
        <p
          className="text-white/50 mt-10 text-xs uppercase"
          style={{
            fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            letterSpacing: "0.28em",
          }}
        >
          Spatial exhibition planning
        </p>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="w-px h-16 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="grid md:grid-cols-2 border-t border-black/10">
      <div className="py-24 px-8 md:px-16 flex flex-col justify-center">
        <p
          className="uppercase text-black/40 text-xs mb-10"
          style={{
            fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            letterSpacing: "0.3em",
          }}
        >
          About
        </p>
        <h2
          className="text-black uppercase mb-8"
          style={{
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
            fontWeight: 300,
            letterSpacing: "0.1em",
            lineHeight: 1.1,
          }}
        >
          Bridge vision
          <br />
          and the wall.
        </h2>
        <p
          className="text-black/60 leading-relaxed max-w-md"
          style={{
            fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
            lineHeight: 1.8,
          }}
        >
          Whether you are a professional art curator, a passionate photographer, or looking to
          beautifully showcase your artwork in your own home, the journey from a conceptual layout
          to a physical display is often filled with trial, error, and wasted resources.
        </p>
        <p
          className="text-black/60 leading-relaxed max-w-md mt-5"
          style={{
            fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
            lineHeight: 1.8,
          }}
        >
          MindGallery bridges the gap between your vision and the gallery wall. Designed for
          detail-oriented independent curators, gallery owners, artists, and interior design
          enthusiasts — this immersive spatial planning tool lets you accurately preview,
          arrange, and perfect your exhibition layouts before making a single physical adjustment.
        </p>
      </div>
      <div className="relative min-h-[400px] md:min-h-0 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={aboutImg}
          alt="Gallery space with artwork"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="border-t border-black/10 py-24 px-8 md:px-16">
      <p
        className="uppercase text-black/40 text-xs mb-16"
        style={{
          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          letterSpacing: "0.3em",
        }}
      >
        Key Features
      </p>
      <div className="grid md:grid-cols-2 gap-px bg-black/10">
        {features.map((f) => (
          <div key={f.index} className="bg-white p-10 md:p-14">
            <span
              className="block text-black/25 text-xs mb-8"
              style={{
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                letterSpacing: "0.2em",
              }}
            >
              {f.index}
            </span>
            <h3
              className="text-black uppercase mb-5"
              style={{
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                fontWeight: 400,
                letterSpacing: "0.08em",
                lineHeight: 1.2,
              }}
            >
              {f.title}
            </h3>
            <p
              className="text-black/55 leading-relaxed"
              style={{
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                lineHeight: 1.85,
              }}
            >
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Download() {
  return (
    <section className="border-t border-black/10 py-32 px-8 md:px-16 flex flex-col items-center text-center">
      <p
        className="uppercase text-black/40 text-xs mb-12"
        style={{
          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          letterSpacing: "0.3em",
        }}
      >
        Available Now
      </p>
      <h2
        className="text-black uppercase mb-6"
        style={{
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          fontSize: "clamp(2rem, 6vw, 5rem)",
          fontWeight: 300,
          letterSpacing: "0.14em",
          lineHeight: 1,
        }}
      >
        Preserve the integrity
        <br />
        of your shows.
      </h2>
      <p
        className="text-black/50 max-w-xl mt-6 mb-14"
        style={{
          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          fontSize: "0.95rem",
          letterSpacing: "0.02em",
          lineHeight: 1.8,
        }}
      >
        Honor your artists' exact creative directions and embrace a sustainable, highly efficient
        workflow — exclusively on Apple Vision Pro.
      </p>
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
      >
        <svg
          className="w-6 h-6 group-hover:fill-white fill-black transition-colors duration-300"
          viewBox="0 0 814 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 680 0 560.8 0 446.3c0-218.1 141.4-333.5 280.3-333.5 74.6 0 136.7 49.2 184.4 49.2 45.5 0 116.7-52 200.7-52 32.2 0 108.2 2.6 164.3 76.6zm-310.5-174.8c31.7-37.6 54.4-89.7 54.4-141.8 0-7.1-.6-14.3-1.9-20.1-51.5 1.9-112.3 34.2-149.2 75.8-28.5 32.4-55.1 84.5-55.1 137.4 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 46.1 0 101.5-29.8 136.3-70.7z" />
        </svg>
        <span
          className="uppercase text-xs"
          style={{
            fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            letterSpacing: "0.2em",
          }}
        >
          Download on the App Store
        </span>
      </a>
    </section>
  );
}

const team = [
  {
    src: samuelImg,
    name: "Samuel Scalise",
    role: "XR Designer",
    discipline: "Photographer",
  },
  {
    src: alexImg,
    name: "Alessandro Esposito\nVulgo Gigante",
    role: "iOS Developer",
    discipline: "Computer Engineer",
  },
];

function Credits() {
  return (
    <section className="border-t border-black/10 py-24 px-8 md:px-16">
      <p
        className="uppercase text-black/40 text-xs mb-16"
        style={{
          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          letterSpacing: "0.3em",
        }}
      >
        Credits
      </p>
      <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto">
        {team.map((person) => (
          <div key={person.name} className="flex flex-col items-center gap-6">
            <div className="overflow-hidden bg-gray-100 w-full" style={{ aspectRatio: "3/4", maxWidth: "260px" }}>
              <ImageWithFallback
                src={person.src}
                alt={person.name}
                className="w-full h-full object-cover grayscale"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
            <div className="text-center">
              <p
                className="text-black uppercase"
                style={{
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {person.name}
              </p>
              <p
                className="text-black/45 mt-2 uppercase"
                style={{
                  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                }}
              >
                {person.role} — {person.discipline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Support() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    const subject = encodeURIComponent(`MindGallery Support — ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:samscaph@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: "0.875rem",
    letterSpacing: "0.04em",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: "0.65rem",
    letterSpacing: "0.25em",
  };

  return (
    <section id="support" className="border-t border-black/10 py-24 px-8 md:px-16">
      <div className="max-w-2xl mx-auto">
        <p
          className="uppercase text-black/40 text-xs mb-10"
          style={labelStyle}
        >
          Support
        </p>
        <h2
          className="text-black uppercase mb-16"
          style={{
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "0.1em",
            lineHeight: 1.05,
          }}
        >
          Get in touch.
        </h2>

        {sent ? (
          <div className="border border-black/20 py-16 text-center">
            <p
              className="uppercase text-black text-xs"
              style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: "0.25em" }}
            >
              Message received.
            </p>
            <p
              className="text-black/50 mt-3 text-sm"
              style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: "0.04em" }}
            >
              We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
            <div className="flex flex-col gap-2">
              <label className="uppercase text-black/50" style={labelStyle}>Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="w-full border-b border-black/20 bg-transparent py-3 text-black placeholder-black/25 focus:outline-none focus:border-black transition-colors duration-300"
                placeholder="Your name"
                style={inputStyle}
              />
              {errors.name && (
                <span className="text-xs text-black/50" style={labelStyle}>{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-black/50" style={labelStyle}>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full border-b border-black/20 bg-transparent py-3 text-black placeholder-black/25 focus:outline-none focus:border-black transition-colors duration-300"
                placeholder="your@email.com"
                style={inputStyle}
              />
              {errors.email && (
                <span className="text-xs text-black/50" style={labelStyle}>{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-black/50" style={labelStyle}>Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="w-full border-b border-black/20 bg-transparent py-3 text-black placeholder-black/25 focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                placeholder="How can we help?"
                style={inputStyle}
              />
              {errors.message && (
                <span className="text-xs text-black/50" style={labelStyle}>{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="self-start border border-black px-8 py-4 uppercase text-xs text-black hover:bg-black hover:text-white transition-colors duration-300 mt-4"
              style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: "0.2em" }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <span
        className="uppercase text-black/35 text-xs"
        style={{
          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          letterSpacing: "0.22em",
        }}
      >
        MindGallery
      </span>
      <span
        className="uppercase text-black/25 text-xs"
        style={{
          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          letterSpacing: "0.18em",
        }}
      >
        © 2026 — All rights reserved
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Features />
      <Download />
      <Credits />
      <Support />
      <Footer />
    </div>
  );
}
