import achievementsData from '../data/achievements.json'
import { SectionTitle } from './About'

export default function Achievements() {
  return (
    <section id="achievements" className="section-z px-5 py-24 max-w-6xl mx-auto">
      <SectionTitle title="Achievements & Certifications" subtitle="Recognition and learning milestones" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievementsData.map(ach => (
          <div key={ach.id}
            className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-teal-400/50 hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">{ach.icon}</div>
            <h3 className="text-[0.9rem] font-bold text-slate-100 mb-1">{ach.title}</h3>
            <p className="text-[0.8rem] text-slate-400 leading-snug mb-2">{ach.description}</p>
            <p className="text-[0.7rem] font-mono text-slate-500">{ach.year}</p>
            {ach.certificateUrl && (
              <a href={ach.certificateUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.73rem] text-teal-400 no-underline mt-3 border border-teal-400/20 px-3 py-1.5 rounded-full hover:bg-teal-400/10 hover:border-teal-400 transition-all">
                ↗ {ach.certificateLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
