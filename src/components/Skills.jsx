import skillsData from '../data/skills.json'
import { SectionTitle } from './About'

export default function Skills() {
  return (
    <section id="skills" className="section-z px-5 py-24 max-w-6xl mx-auto">
      <SectionTitle title="Skills" subtitle="Technologies I work with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsData.map(skill => (
          <div key={skill.id}
            className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-teal-400/60 hover:-translate-y-1 transition-all duration-300 group">
            <h3 className="text-xs font-mono font-semibold text-teal-400 tracking-widest uppercase mb-4">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <span key={item}
                  className="text-xs font-mono px-3 py-1.5 rounded-md bg-[#1a1a1a] border border-[#2a2a2a] text-slate-200 group-hover:border-[#333] transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
