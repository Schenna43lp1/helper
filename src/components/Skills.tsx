const skillCategories = [
  {
    title: "Frontend",
    color: "#0070f3",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "#00ff88",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    title: "Infrastructure",
    color: "#8B5CF6",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 72 },
    ],
  },
  {
    title: "Trading & Finance",
    color: "#00ffff",
    skills: [
      { name: "Algorithmic Trading", level: 90 },
      { name: "Machine Learning", level: 82 },
      { name: "Technical Analysis", level: 88 },
      { name: "Risk Management", level: 85 },
      { name: "Backtesting", level: 90 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "Docker", "AWS", "GraphQL", "Redis", "Kubernetes", "TensorFlow",
  "Tailwind", "Vue.js", "Express", "FastAPI", "MongoDB", "Terraform",
  "GitHub Actions", "Jest", "Prisma", "Stripe API", "WebSockets", "ML/AI",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative" style={{ background: "#050505" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #0070f3, transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 7+ years of shipping production software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 border border-white/5 glass-hover"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: category.color, boxShadow: `0 0 10px ${category.color}` }}
                />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}aa)`,
                          boxShadow: `0 0 10px ${category.color}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="glass rounded-full px-4 py-2 text-sm text-gray-300 border border-white/5 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
