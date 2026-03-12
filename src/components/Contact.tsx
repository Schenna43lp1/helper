"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Demo: replace with an actual API call or email service (e.g. Resend, Formspree) in production
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text-purple">Build Something</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Looking to collaborate or hire? Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            {[
              {
                icon: "✉️",
                title: "Email",
                value: "markus@stuefer.dev",
                href: "mailto:markus@stuefer.dev",
              },
              {
                icon: "🐙",
                title: "GitHub",
                value: "github.com/markusstuefer",
                href: "https://github.com",
              },
              {
                icon: "💼",
                title: "LinkedIn",
                value: "linkedin.com/in/markusstuefer",
                href: "https://linkedin.com",
              },
              {
                icon: "🐦",
                title: "Twitter / X",
                value: "@markusstuefer",
                href: "https://twitter.com",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="glass rounded-xl p-4 flex items-center gap-4 border border-white/5 glass-hover block"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-gray-500 text-xs">{item.title}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full btn-primary justify-center text-base ${
                  status === "sent" ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status === "idle" && (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                )}
                {status === "error" && "Failed - Try Again"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
