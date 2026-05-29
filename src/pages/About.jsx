import React from 'react';
export default function About() {
  const skills = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 100 100" className="skill-icon" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(0 50 50)"/>
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(120 50 50)"/>
        </svg>
      ),
      delay: '0.1s'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
          <path d="M3 3h18v18H3V3z" fill="#f7df1e" style={{ opacity: 0.1 }}/>
          <path d="M12 17.2c0 .96.34 1.48 1.15 1.48.65 0 1.05-.33 1.05-1.07V13.5h1.95v3.6c0 1.95-1.12 2.9-3.05 2.9-1.92 0-3.1-.92-3.1-2.8v-.4h2.15v.4zm4.83.6c.46.73 1.16 1.08 2.07 1.08.76 0 1.25-.33 1.25-.97 0-.68-.53-.94-1.57-1.37l-.54-.22c-1.4-.58-2.18-1.34-2.18-2.73 0-1.63 1.34-2.75 3.12-2.75 1.58 0 2.65.65 3.17 1.95l-1.68 1.02c-.36-.67-.78-.97-1.42-.97-.56 0-.96.25-.96.8 0 .5.33.72 1.13 1.05l.63.26c1.6.65 2.45 1.33 2.45 2.92 0 1.83-1.42 2.97-3.37 2.97-2.07 0-3.32-.97-3.9-2.28l1.83-1.08z"/>
        </svg>
      ),
      delay: '0.2s'
    },
    {
      name: 'CSS3',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 2 19 2 17.5 19.5 12 22 6.5 19.5" />
          <path d="M12 6H8v4h8v4l-4 1.5L8 14" />
        </svg>
      ),
      delay: '0.3s'
    },
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6" />
          <path d="M9 18h6" />
          <path d="M18 15V9" style={{ opacity: 0.3 }} />
        </svg>
      ),
      delay: '0.4s'
    },
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
        </svg>
      ),
      delay: '0.5s'
    },
    {
      name: 'Vercel',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      ),
      delay: '0.6s'
    }
  ];
  return (
    <div className="about-container">
      <div className="about-grid">
        
        {/* Left Column: Profile Card */}
        <div className="glow-card profile-card">
          <div className="profile-avatar-container">
            <div className="profile-avatar-glow"></div>
            <div className="profile-avatar">
              {/* Premium abstract tech logo / avatar representation */}
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2" fill="var(--accent-light)" />
              </svg>
            </div>
          </div>
          
          <h2 className="profile-name">Ansh</h2>
          <p className="profile-title">Frontend Developer</p>
          
          <div className="profile-details">
            <div className="profile-detail-item">
              <span className="profile-detail-label">Location:</span>
              <span className="profile-detail-val">Delhi, India</span>
            </div>
            <div className="profile-detail-item">
              <span className="profile-detail-label">Experience:</span>
              <span className="profile-detail-val">1 Years+</span>
            </div>
            <div className="profile-detail-item">
              <span className="profile-detail-label">Availability:</span>
              <span className="profile-detail-val">Freelance / Contract</span>
            </div>
          </div>
        </div>
        {/* Right Column: Bio and Skills */}
        <div className="bio-section">
          <h2 className="section-title">About Me</h2>
          
          <div className="bio-text">
            <p className="bio-paragraph">
              I am a digital architect operating at the intersection of creative UI/UX systems and robust Front-End software development. With a deep passion for writing clean, structured code and establishing high-fidelity design standards, I specialize in crafting interactive applications that deliver exceptional user experiences. Also I have been grasping my hands over the backend-development, so that will also be up soon.
            </p>
            <p className="bio-paragraph">
              Under the banner of <strong>Arcangel Devs</strong>, I build web solutions using React, and modern CSS strategies. I believe in writing code that is not only highly performant and secure but also aesthetically pleasing, utilizing custom-tailored animations, responsive layouts, and interactive canvas components to captivate audiences.
            </p>
          </div>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginTop: '20px' }}>Tech Stack</h3>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{ animationDelay: skill.delay }}
              >
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
