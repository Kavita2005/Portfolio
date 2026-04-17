import React from "react";

const contactLinks = [
  {
    href: "mailto:kavitachimman4@gmail.com",
    label: "Email",
    value: "kavitachimman4@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    href: "tel:+919284588808",
    label: "Phone",
    value: "+91 92845 88808",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/kavita-chimman-469737323/",
    label: "LinkedIn",
    value: "linkedin.com/in/kavita-chimman-469737323",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Kavita2005",
    label: "GitHub",
    value: "github.com/Kavita2005",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="section-title-block">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="section-underline" />
        <p className="section-subtitle">
          Ready to bring your{" "}
          <span className="text-teal">ideas to life</span>? Let's create
          something amazing together.
        </p>
      </div>

      <div className="max-w-[920px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
        {/* Left: info */}
        <div>
          <h3 className="text-[1.15rem] font-bold text-white mb-6">Get in Touch</h3>
          {contactLinks.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-item">
              <div className="flex items-center justify-center flex-shrink-0 rounded-lg w-9 h-9 bg-teal/10 text-teal">
                {c.icon}
              </div>
              <div>
                <p className="text-[0.7rem] text-slate-400 font-mono">{c.label}</p>
                <p className="text-[0.85rem] font-medium text-white">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Right: form */}
        <div className="p-8 card">
          <h3 className="text-[1.15rem] font-bold text-white mb-6 text-center">Contact Me</h3>
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.75rem] text-slate-400 font-mono">Name</label>
              <input type="text" placeholder="Your name" className="bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-white text-[0.875rem] outline-none focus:border-teal transition-colors placeholder-slate-600" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.75rem] text-slate-400 font-mono">Email</label>
              <input type="email" placeholder="Your email" className="bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-white text-[0.875rem] outline-none focus:border-teal transition-colors placeholder-slate-600" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mb-5">
            <label className="text-[0.75rem] text-slate-400 font-mono">Message</label>
            <textarea placeholder="Your message" rows={5} className="bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-white text-[0.875rem] outline-none focus:border-teal transition-colors placeholder-slate-600 resize-y" />
          </div>
          <button className="w-full py-3 bg-teal text-black font-bold text-[0.9rem] rounded-lg hover:bg-teal-dark transition-colors duration-200">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { href: "https://github.com/Kavita2005", icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
    { href: "https://www.linkedin.com/in/kavita-chimman-469737323", icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { href: "mailto:kavitachimman4@gmail.com", icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> },
  ];

  return (
    <footer className="relative z-10 bg-[#111] border-t border-[#1e1e1e] px-[5%] py-8 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-black text-black rounded-full bg-teal">
          KC
        </div>
        <div>
          <p className="font-bold text-[0.9rem] text-white">Kavita Chimman</p>
          <p className="text-[0.72rem] text-slate-400">Full-Stack Developer</p>
        </div>
      </div>

      <div className="flex gap-2">
        {socials.map((s, i) => (
          <a key={i} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
            className="w-9 h-9 rounded-lg border border-[#2a2a2a] flex items-center justify-center text-slate-400 hover:border-teal hover:text-teal transition-all duration-200">
            {s.icon}
          </a>
        ))}
      </div>

      <p className="text-[0.78rem] text-slate-400">
        © 2026 Kavita Chimman &nbsp;·&nbsp; Crafted with{" "}
        <span className="text-teal">♥</span> and code
      </p>
    </footer>
  );
}
