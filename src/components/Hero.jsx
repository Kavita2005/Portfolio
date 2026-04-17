export default function Hero() {
  return (
    <section id="home" className="section-z min-h-screen flex items-center justify-center text-center pt-16 px-5">
      <div className="max-w-3xl">
        <p className="text-slate-400 text-lg mb-3 font-light">Hello! I'm</p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-100 leading-tight tracking-tighter mb-4">
          Kavita Chimman
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 font-light mb-6">
          Full-Stack Developer &amp; Aspiring Software Engineer
        </p>
        <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-transparent mx-auto mb-10" />
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/Kavita_Chimman_Resume.pdf" download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-400 text-black font-bold text-sm hover:bg-teal-500 transition-all hover:-translate-y-0.5 no-underline">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
            View Resume
          </a>
          <a href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#2a2a2a] text-slate-200 font-semibold text-sm hover:border-teal-400 hover:text-teal-400 transition-all hover:-translate-y-0.5 no-underline">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
