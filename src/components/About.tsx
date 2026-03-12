export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ background: "radial-gradient(circle, #0070f3, #8B5CF6, transparent)" }}
              />
              <div
                className="relative w-72 h-72 rounded-full glass flex items-center justify-center text-8xl font-bold gradient-text border-2"
                style={{ borderColor: "rgba(0, 112, 243, 0.3)" }}
              >
                MS
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-blue-400 border border-blue-500/30">
                🚀 Founder
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-green-400 border border-green-500/30">
                💻 Full-Stack
              </div>
              <div className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 text-xs font-semibold text-purple-400 border border-purple-500/30">
                📈 Trading
              </div>
            </div>
          </div>

          <div>
            <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future,{" "}
              <span className="gradient-text">One Line at a Time</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I&apos;m Markus Stuefer, a full-stack developer and tech founder with over 7 years of
                experience building production-grade web applications and algorithmic trading systems.
              </p>
              <p>
                I&apos;ve co-founded multiple tech startups, led engineering teams, and shipped products
                used by thousands of users. My expertise spans from crafting pixel-perfect UIs with
                React and Next.js to architecting distributed backend systems.
              </p>
              <p>
                Beyond traditional software, I engineer quantitative trading algorithms that leverage
                machine learning and real-time market data to generate consistent returns in financial markets.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", title: "Performance First", desc: "Optimized for speed" },
                { icon: "🔒", title: "Security Minded", desc: "Best practices always" },
                { icon: "📐", title: "Clean Code", desc: "Maintainable & scalable" },
                { icon: "🎯", title: "User Focused", desc: "Intuitive experiences" },
              ].map((val) => (
                <div key={val.title} className="glass rounded-xl p-4 border border-white/5">
                  <div className="text-2xl mb-2">{val.icon}</div>
                  <div className="text-white font-semibold text-sm">{val.title}</div>
                  <div className="text-gray-500 text-xs">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
