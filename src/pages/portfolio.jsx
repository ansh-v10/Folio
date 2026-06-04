import React, { useState } from 'react';
export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'JavaScript', 'UI & CSS'];
  // ==========================================
  // GUIDE: HOW TO UPDATE YOUR PORTFOLIO ITEMS
  // ==========================================
  // You can easily modify, add, or remove projects by editing this `projects` array.
  // Each project object must follow this structure:
  //
  // {
  //   title: 'Project Name',
  //   description: 'Short summary of the project goals, tech, and achievements.',
  //   category: 'React' | 'JavaScript' | 'UI & CSS' (matches one of the filter buttons in `categories`),
  //   tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  //   icon: (
  //     <svg ...> ... </svg>  // Inline SVG icon that renders in the center of the project image box
  //   ),
  //   github: 'https://github.com/ansh-v10/your-repo-name',
  //   live: 'https://your-deployed-project.vercel.app'
  // }
  //
  // Simply add or remove objects in this list to update what is shown in your portfolio!
  const projects = [
    {
      title: 'PitWall',
      description: 'A web-based Formula 1 data dashboard bringing real-time and historical F1 stats to your browser using the F1 API.',
      category: 'React',
      tags: ['React', 'F1 API', 'Data Dashboard', 'Web App'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" strokeDasharray="3 3" />
          <path d="M12 12l5-5" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      github: 'https://github.com/ansh-v10/PitWall',
      live: 'https://ansh-v10.github.io/PitWall/'
    },
    {
      title: 'Tradevia',
      description: 'A premium wholesale B2B e-commerce storefront and administrative control desk featuring tiered bulk pricing sheets, tax-compliant GST input credit claiming, and inventory management.',
      category: 'React',
      tags: ['React', 'React Router', 'B2B Wholesale', 'E-commerce', 'Vite'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8V21H3V8" />
          <path d="M1 3H23V8H1V3Z" />
          <path d="M10 12H14" strokeWidth="2" />
        </svg>
      ),
      github: 'https://github.com/ansh-v10/Tradevia',
      live: 'https://ansh-v10.github.io/Tradevia/'
    },
    {
      title: 'Cap-Stoner',
      description: 'A comprehensive Capstone Web Application built during Semester 1, showcasing clean layout execution, interactive elements, and frontend styling.',
      category: 'UI & CSS',
      tags: ['HTML5', 'CSS Grid', 'Responsive Design'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
      github: 'https://github.com/ansh-v10/Cap-Stoner',
      live: 'https://ansh-v10.github.io/Cap-Stoner'
    },
    {
      title: 'Friend Indeed',
      description: 'An interactive frontend companion portal built to explore peer connections, user-friendly forms submission, and modern card grid UI structures.',
      category: 'JavaScript',
      tags: ['JavaScript', 'Social UI', 'DOM Manipulation'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      github: 'https://github.com/ansh-v10/friend-indeed',
      live: 'https://ansh-v10.github.io/friend-indeed'
    }
  ];
  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h2 className="section-title">My Portfolio</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '1.05rem' }}>
          Explore some of my featured projects, filtered by technology category.
        </p>
      </div>
      {/* Filter Control Buttons */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.title} 
            className="project-card-wrapper"
            style={{ 
              animation: 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
              animationDelay: `${index * 0.05}s` 
            }}
          >
            <div className="glow-card project-card">
              <div className="project-card-image">
                <div className="project-card-icon">
                  {project.icon}
                </div>
              </div>
              
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-card-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-card-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
