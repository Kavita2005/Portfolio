import { SectionTitle } from './About'

export default function Experience() {
  return (
    <section id="experience" className="section-z px-5 py-24 max-w-4xl mx-auto">
      <SectionTitle title="Experience" subtitle="Where I've worked" />
      <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-8 hover:border-teal-400/50 transition-colors duration-300">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
          <div>
            <h3 className="text-lg font-bold text-slate-100">WordPress Developer Intern</h3>
            <p className="text-[0.9rem] text-teal-400 font-medium mt-1">DK Techno's</p>
          </div>
          <span className="text-[0.73rem] font-mono text-slate-400 bg-[#161616] border border-[#2a2a2a] px-4 py-2 rounded-full whitespace-nowrap">
            Jul 2022 – Oct 2022
          </span>
        </div>
        <ul className="space-y-2">
          {[
            'Developed and customized WordPress websites using themes and plugins',
            'Assisted in deployment and basic performance optimization of live sites'
          ].map(point => (
            <li key={point} className="flex gap-3 text-[0.875rem] text-slate-400 leading-relaxed">
              <span className="text-teal-400 mt-0.5 shrink-0">▸</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
