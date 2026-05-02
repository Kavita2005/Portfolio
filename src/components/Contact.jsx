export default function Contact() {
  return (
    <section
      id="contact"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="w-full px-8 py-16 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: '#2dd4bf',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '1.2rem',
          fontFamily: 'monospace'
        }}>
          Get In Touch
        </p>

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* LEFT — headline + email button */}
          <div>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Let's build
            </h2>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#2dd4bf',
              margin: '0 0 2rem 0',
              letterSpacing: '-0.02em'
            }}>
              something.
            </h2>

            <a
              href="mailto:kavitachimman4@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#2dd4bf',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.85rem 1.8rem',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#14b8a6'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2dd4bf'}
            >
              <MailIcon />
              <span>kavitachimman4@gmail.com</span>
            </a>
          </div>

          {/* RIGHT — contact + links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '200px' }}>

            <div>
              <p style={{
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: '#555',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                marginBottom: '0.6rem',
                fontWeight: 600
              }}>
                Contact
              </p>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '0 0 0.3rem 0' }}>
                +91 92845 88808
              </p>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
                Pune, Maharashtra, India
              </p>
            </div>

            <div>
              <p style={{
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: '#555',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                marginBottom: '0.75rem',
                fontWeight: 600
              }}>
                Links
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a
                  href="https://github.com/Kavita2005"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#888',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2dd4bf'}
                  onMouseLeave={e => e.currentTarget.style.color = '#888'}
                >
                  <GHIcon />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kavita-chimman-469737323/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#888',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2dd4bf'}
                  onMouseLeave={e => e.currentTarget.style.color = '#888'}
                >
                  <LIIcon />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  )
}

function GHIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LIIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}