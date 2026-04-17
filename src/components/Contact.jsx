import { SectionTitle } from './About'

const contactLinks = [
  { label: 'Email', value: 'kavitachimman4@gmail.com', href: 'mailto:kavitachimman4@gmail.com', icon: <MailIcon /> },
  { label: 'Phone', value: '+91 92845 88808', href: 'tel:+919284588808', icon: <PhoneIcon /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/kavita-chimman-469737323', href: 'https://www.linkedin.com/in/kavita-chimman-469737323/', icon: <LIIcon /> },
  { label: 'GitHub', value: 'github.com/Kavita2005', href: 'https://github.com/Kavita2005', icon: <GHIcon /> }
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl px-5 py-24 mx-auto section-z">
      <SectionTitle title="Get In Touch"
        subtitle={<>Ready to bring your <span className="text-teal-400">ideas to life</span>? Let's create something amazing together.</>} />
      <div className="grid items-start grid-cols-1 gap-10 md:grid-cols-2">
        {/* Info */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-slate-100">Get in Touch</h3>
          <div className="flex flex-col gap-3">
            {contactLinks.map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-[#111] border border-[#1e1e1e] rounded-xl hover:border-teal-400/60 hover:bg-teal-400/5 transition-all no-underline text-slate-200">
                <div className="flex items-center justify-center text-teal-400 rounded-lg w-9 h-9 bg-teal-400/10 shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-[0.68rem] font-mono text-slate-500">{c.label}</div>
                  <div className="text-[0.85rem] font-medium text-slate-200">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-7">
          <h3 className="mb-6 text-lg font-bold text-center text-slate-100">Contact Me</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormField label="Name" placeholder="Your name" type="text" />
            <FormField label="Email" placeholder="Your email" type="email" />
          </div>
          <div className="mb-5">
            <label className="block text-[0.73rem] font-mono text-slate-400 mb-1.5">Message</label>
            <textarea placeholder="Your message"
              className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-4 py-3 text-slate-200 text-[0.875rem] outline-none focus:border-teal-400 transition-colors resize-y min-h-[110px] placeholder:text-slate-600" />
          </div>
          <button className="w-full py-3 bg-teal-400 text-black rounded-lg font-bold text-[0.9rem] hover:bg-teal-500 transition-colors cursor-pointer border-none">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, placeholder, type }) {
  return (
    <div>
      <label className="block text-[0.73rem] font-mono text-slate-400 mb-1.5">{label}</label>
      <input type={type} placeholder={placeholder}
        className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-4 py-3 text-slate-200 text-[0.875rem] outline-none focus:border-teal-400 transition-colors placeholder:text-slate-600" />
    </div>
  )
}

function MailIcon() { return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> }
function PhoneIcon() { return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> }
function LIIcon() { return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> }
function GHIcon() { return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> }
