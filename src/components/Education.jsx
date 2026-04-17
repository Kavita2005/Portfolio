import educationData from '../data/education.json'
import { SectionTitle } from './About'

export default function Education() {
  return (
    <section id="education" className="section-z px-5 py-24 max-w-4xl mx-auto">
      <SectionTitle title="Education" subtitle="My academic journey" />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-teal-400 to-[#2a2a2a]" />
        <div className="flex flex-col gap-8">
          {educationData.map(edu => (
            <div key={edu.id} className="flex gap-8 pl-12 relative">
              {/* Dot */}
              <div className="absolute left-[11px] top-2.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.3)]" />
              {/* Card */}
              <div className="flex-1 bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-teal-400/50 transition-colors duration-300">
                <span className="inline-block text-[0.68rem] font-mono font-semibold text-teal-400 bg-teal-400/10 border border-teal-400/20 px-3 py-1 rounded-full mb-4 tracking-wider">
                  {edu.type}
                </span>
                <h3 className="text-base font-bold text-slate-100 mb-1">{edu.degree}</h3>
                <p className="text-[0.875rem] text-teal-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-[0.78rem] text-slate-400 mb-2">{edu.university}</p>
                <p className="text-[0.73rem] font-mono text-slate-500 mb-3">
                  {edu.period}{edu.note && ` · ${edu.note}`}
                </p>
                <p className="text-[0.845rem] text-slate-400 leading-relaxed mb-3">{edu.description}</p>
                <span className="inline-block text-[0.75rem] font-mono text-blue-400 bg-blue-400/8 border border-blue-400/20 px-3 py-1 rounded-full">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
