import { SectionTitle } from './About'

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Java Developer",
      company: "Kiran Academy",
      date: "Jan 2026 – Present",
      points: [
        "Developed and maintained full-stack web applications using Java and modern frontend technologies",
        "Collaborated with cross-functional teams to design, build, and deploy scalable backend services",
        "Implemented RESTful APIs and integrated third-party services to enhance application functionality"
      ]
    },
    {
      title: "WordPress Developer Intern",
      company: "DK Techno's",
      date: "Jul 2022 – Oct 2022",
      points: [
        "Developed and customized WordPress websites using themes and plugins",
        "Assisted in deployment and basic performance optimization of live sites"
      ]
    }
  ]

  return (
    <section id="experience" className="max-w-4xl px-5 py-24 mx-auto section-z">
      <SectionTitle title="Experience" subtitle="Where I've worked" />
      <div className="flex flex-col gap-5">
        {experiences.map(exp => (
          <div key={exp.title} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-8 hover:border-teal-400/50 transition-colors duration-300">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-100">{exp.title}</h3>
                <p className="text-[0.9rem] text-teal-400 font-medium mt-1">{exp.company}</p>
              </div>
              <span className="text-[0.73rem] font-mono text-slate-400 bg-[#161616] border border-[#2a2a2a] px-4 py-2 rounded-full whitespace-nowrap">
                {exp.date}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.points.map(point => (
                <li key={point} className="flex gap-3 text-[0.875rem] text-slate-400 leading-relaxed">
                  <span className="text-teal-400 mt-0.5 shrink-0">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}