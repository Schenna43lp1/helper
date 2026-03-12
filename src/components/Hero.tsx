"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #000000, #0a0a1a, #0d0d2b, #001a3d, #000820, #000000)",
          backgroundSize: "400% 400%",
        }}
      />

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: "radial-gradient(circle, #0070f3, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, #8B5CF6, transparent)",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, #00ffff, transparent)",
          animationDelay: "1.5s",
        }}
      />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,112,243,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,112,243,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new projects
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Markus</span>
          <br />
          <span className="text-white">Stuefer</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
          Full-Stack Developer <span className="text-gray-600">&amp;</span>{" "}
          <span className="text-blue-400">Tech Founder</span>
        </p>

        <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg">
          Building scalable web applications, trading algorithms, and innovative
          tech products. Turning complex ideas into elegant digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-primary text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn-ghost text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get In Touch
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: "7+", label: "Years Experience" },
            { value: "50+", label: "Projects Built" },
            { value: "3", label: "Startups Founded" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
