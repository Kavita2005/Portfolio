import React from "react";

export function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="section-title-block">
        <h2 className="section-heading">Experience</h2>
        <div className="section-underline" />
        <p className="section-subtitle">Where I've worked</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="p-8 card">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div>
              <h3 className="text-[1.1rem] font-bold text-white">WordPress Developer Intern</h3>
              <p className="text-[0.9rem] text-teal font-medium mt-1">DK Techno's , Solapur</p>
            </div>
            <span className="text-[0.75rem] font-mono text-slate-400 bg-[#161616] border border-[#2a2a2a] px-4 py-1.5 rounded-full whitespace-nowrap">
              Jul 2022 – Oct 2022
            </span>
          </div>
          <ul className="space-y-2 list-none">
            {[
              "Developed and customized WordPress websites using themes and plugins",
              "Assisted in deployment and basic performance optimization of live sites",
            ].map((point, i) => (
              <li key={i} className="text-[0.875rem] text-slate-400 pl-6 relative leading-[1.7]">
                <span className="absolute left-0 text-teal">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const achievements = [
  { icon: "🥇", title: "First Prize — Avishkar 2025", sub: "Project Competition at A. G. Patil Institute of Technology", year: "2025", link: null },
  { icon: "📄", title: "Research Paper Published", sub: "IRJMET — Driver Drowsiness Detection System using AI & OpenCV", year: "May–Jun 2025", link: "#", linkLabel: "↗ View Paper" },
  { icon: "☕", title: "Java Programming — Udemy", sub: "Certification in Java Programming", year: "2026", link: "#", linkLabel: "↗ View Certificate" },
  { icon: "🥇", title: "First Prize — Industrial Training", sub: "Project Competition at Government Polytechnic, Solapur", year: "2023", link: null },
  { icon: "⚡", title: "Hackathon Coordinator", sub: "Organized coding events and coordinated technical teams at AGPIT", year: "2025", link: null },
  { icon: "🤝", title: "Placement Committee Member", sub: "Facilitated campus recruitment activities at AGPIT", year: "2025", link: null },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-wrapper">
      <div className="section-title-block">
        <h2 className="section-heading">Achievements &amp; Certifications</h2>
        <div className="section-underline" />
        <p className="section-subtitle">Recognition and learning milestones</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <div key={i} className="p-6 transition-all duration-300 card hover:-translate-y-1">
            <div className="text-[1.75rem] mb-3">{a.icon}</div>
            <h3 className="text-[0.9rem] font-bold text-white mb-1">{a.title}</h3>
            <p className="text-[0.8rem] text-slate-400 leading-[1.55]">{a.sub}</p>
            <p className="text-[0.72rem] font-mono text-slate-500 mt-2">{a.year}</p>
            {a.link && (
              <a
                href={a.link}
                className="inline-flex items-center gap-1 text-[0.75rem] text-teal no-underline mt-3 border border-teal/20 px-3 py-1 rounded-full hover:bg-teal/10 hover:border-teal transition-all duration-200"
              >
                {a.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
