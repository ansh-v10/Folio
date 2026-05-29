import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '30px 24px',
      marginTop: '60px',
      backgroundColor: 'rgba(10, 10, 18, 0.5)',
      width: '100%',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        '@media (min-width: 768px)': {
          flexDirection: 'row'
        }
      }} className="footer-content">
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontFamily: 'var(--font-body)'
        }}>
          &copy; {currentYear} <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>ArcAngel Dev</span>. All rights reserved.
        </p>

        {/* Social Icons inside Footer */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <a 
            href="https://github.com/ansh-v10" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-muted)', 
              transition: 'var(--transition)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.filter = 'drop-shadow(0 0 6px var(--accent))'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.filter = 'none'; }}
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/ansh-v10/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-muted)', 
              transition: 'var(--transition)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.filter = 'drop-shadow(0 0 6px var(--accent))'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.filter = 'none'; }}
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}