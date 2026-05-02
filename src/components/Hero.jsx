export default function Hero() {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen px-5 pt-16 text-center section-z">
      <div className="max-w-3xl">
        <p className="mb-3 text-lg font-light text-slate-400">Hello! I'm</p>
        <h1 className="mb-4 text-5xl font-black leading-tight tracking-tighter sm:text-6xl md:text-8xl text-slate-100">
          Kavita Chimman
        </h1>
        <p className="mb-6 text-lg font-light sm:text-xl text-slate-400">
          Full-Stack Developer &amp; Aspiring Software Engineer
        </p>
        <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-transparent mx-auto mb-10" />
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://drive.google.com/file/d/1y6-PlA2ZtIted3U-YOOIlkMFzy1dCx9i/view?usp=drivesdk" download
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
