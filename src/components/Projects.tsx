"use client";

const projects = [
  {
    id: 1,
    title: "TradeSphere Platform",
    description:
      "A full-stack algorithmic trading platform with real-time market data, backtesting engine, and portfolio management. Processes 10M+ data points daily.",
    tags: ["Next.js", "Python", "WebSockets", "PostgreSQL", "Redis"],
    color: "#0070f3",
    icon: "📈",
    stats: { users: "2,400+", uptime: "99.9%", trades: "1M+" },
    links: { github: "#", live: "#" },
    featured: true,
  },
  {
    id: 2,
    title: "DevCollab Hub",
    description:
      "Real-time collaborative development environment with AI-powered code review, GitHub integration, and team analytics dashboard.",
    tags: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    color: "#8B5CF6",
    icon: "🛠️",
    stats: { users: "5,000+", repos: "12K+", reviews: "50K+" },
    links: { github: "#", live: "#" },
    featured: false,
  },
  {
    id: 3,
    title: "ML Price Predictor",
    description:
      "Machine learning pipeline for predicting asset prices using LSTM neural networks, sentiment analysis, and technical indicators.",
    tags: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS"],
    color: "#00ff88",
    icon: "🤖",
    stats: { accuracy: "76%", models: "12+", datasets: "5TB" },
    links: { github: "#", live: "#" },
    featured: false,
  },
  {
    id: 4,
    title: "SaaS Starter Kit",
    description:
      "Production-ready Next.js SaaS boilerplate with authentication, billing (Stripe), multi-tenancy, and role-based access control.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
    color: "#00ffff",
    icon: "🚀",
    stats: { stars: "800+", forks: "150+", downloads: "3K+" },
    links: { github: "#", live: "#" },
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Production-grade applications built with modern tech stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass rounded-2xl overflow-hidden border border-white/5 glass-hover group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className="h-2 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
                }}
              />

              <div className={`p-8 ${project.featured ? "md:flex gap-8" : ""}`}>
                <div className={project.featured ? "md:flex-1" : ""}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="text-4xl w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `${project.color}15` }}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{
                              background: `${project.color}20`,
                              color: project.color,
                            }}
                          >
                            Featured Project
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.links.github}
                        className="glass rounded-lg p-2 hover:border-white/20 transition-all"
                        title="GitHub"
                      >
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={project.links.live}
                        className="glass rounded-lg p-2 hover:border-white/20 transition-all"
                        title="Live Demo"
                      >
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{
                          background: `${project.color}10`,
                          color: `${project.color}cc`,
                          borderColor: `${project.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`${project.featured ? "md:w-48 md:flex md:flex-col md:justify-center" : ""}`}>
                  <div className={`grid gap-3 ${project.featured ? "grid-cols-1" : "grid-cols-3"}`}>
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="glass rounded-xl p-3 text-center border border-white/5"
                        style={{ borderColor: `${project.color}20` }}
                      >
                        <div className="text-lg font-bold" style={{ color: project.color }}>
                          {value}
                        </div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
