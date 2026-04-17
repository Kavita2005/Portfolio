export default function About() {
  return (
    <section id="about" className="max-w-6xl px-5 py-24 mx-auto section-z">
      <SectionTitle
        title="About Me"
        subtitle={
          <>
            Get to know the person behind the <span className="text-teal-400">code</span>
          </>
        }
      />

      <div className="grid items-center grid-cols-1 gap-16 mt-12 md:grid-cols-2">
        {/* Text side */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-teal-400 bg-teal-400/10 border border-teal-400/25 px-4 py-1.5 rounded-full mb-6 tracking-wider">
            Full-Stack Developer &amp; Fresher
          </span>

          <p className="text-slate-400 leading-relaxed mb-4 text-[0.95rem]">
            I'm a Computer Engineering student at{' '}
            <strong className="font-semibold text-slate-100">
              A.G. Patil Institute of Technology, Solapur
            </strong>
            , with a journey that started from a Diploma in IT and grew into a passion for
            building real-world tech solutions.
          </p>

          <p className="text-slate-400 leading-relaxed mb-4 text-[0.95rem]">
            I specialize in full-stack web development using the{' '}
            <strong className="font-semibold text-slate-100">MERN stack</strong>, and explore
            computer vision with{' '}
            <strong className="font-semibold text-slate-100">Python and OpenCV</strong>. My
            research on driver drowsiness detection has been published in{' '}
            <strong className="font-semibold text-slate-100">IRJMET</strong> — a project that
            combines both interests.
          </p>

          <p className="text-slate-400 leading-relaxed text-[0.95rem]">
            Outside the classroom, I actively contribute as a{' '}
            <strong className="font-semibold text-slate-100">Code Club member</strong>,{' '}
            <strong className="font-semibold text-slate-100">Hackathon Coordinator</strong>, and{' '}
            <strong className="font-semibold text-slate-100">Placement Committee member</strong>{' '}
            — always collaborating, solving problems, and growing as a developer.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-8 pt-8 border-t border-[#1e1e1e]">
            <Stat num="4+" label="Projects Built" color="text-teal-400" />
            <Stat num="2" label="First Prizes" color="text-violet-400" />
            <Stat num="1" label="Publication" color="text-emerald-400" />
          </div>
        </div>

        {/* Photo side */}
        <div className="flex justify-center">
          <div className="relative w-72 md:w-80">
            <img
              src="/kavita.png"
              alt="Kavita Chimman"
              className="block object-cover object-top w-full rounded-2xl"
              style={{ maxHeight: '420px', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ num, label, color }) {
  return (
    <div>
      <div className={`text-3xl font-black ${color}`}>{num}</div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  )
}

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <h2 className="mb-2 text-3xl font-black sm:text-4xl text-slate-100">{title}</h2>
      <div className="w-14 h-0.5 bg-teal-400 mx-auto my-3 rounded-full" />
      {subtitle && <p className="text-slate-400 text-[0.95rem]">{subtitle}</p>}
    </div>
  )
}