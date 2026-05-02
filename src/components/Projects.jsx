import projectsData from '../data/projects.json'
import { SectionTitle } from './About'

// images
import mentalHealth from '../assets/mentalhealth.png'
import voting from '../assets/online.png'
import drowsiness from '../assets/dd.jpeg'
import codeclub from '../assets/cc.jpg'
import job from '../assets/job.png'

const images = {
  'mental-health': mentalHealth,
  voting,
  drowsiness,
  codeclub,
  job
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl px-5 py-24 mx-auto">
      <SectionTitle title="Projects" subtitle="Things I've built" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map(p => (
          <div key={p.id} className="bg-[#111] border rounded-xl overflow-hidden hover:border-teal-400 transition">

            {/* Image */}
            <img
              src={images[p.thumbnail]}
              alt={p.title}
              className="w-full h-[175px] object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="mb-2 text-base font-bold text-white">{p.title}</h3>

              <p className="mb-3 text-sm text-gray-400">{p.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-3">
                {p.techStack.map(t => (
                  <span key={t} className="text-xs bg-[#1a1a1a] px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-2">
  {p.githubUrl && (
    <a href={p.githubUrl} target="_blank" className="px-3 py-1 text-xs border rounded">
      GitHub
    </a>
  )}

  {p.liveUrl && (
    <a href={p.liveUrl} target="_blank" className="px-3 py-1 text-xs border rounded">
      Live
    </a>
  )}

  {p.publicationUrl && (
    <a href={p.publicationUrl} target="_blank" className="px-3 py-1 text-xs border rounded">
      Publication Certificate
    </a>
  )}
</div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}