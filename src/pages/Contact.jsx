import React, { useState } from 'react';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };
  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address.';
      }
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };
  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '1.05rem' }}>
        Have a project in mind or want to collaborate? Send a message!
      </p>
      <div className="glow-card contact-card">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                style={errors.name ? { borderColor: '#ef4444' } : {}}
                placeholder="Your name"
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                style={errors.email ? { borderColor: '#ef4444' } : {}}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                style={errors.message ? { borderColor: '#ef4444', minHeight: '120px', resize: 'vertical' } : { minHeight: '120px', resize: 'vertical' }}
                placeholder="What can I help you with?"
                disabled={isSubmitting}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button 
              type="submit" 
              className="glow-btn" 
              style={{ width: '100%', marginTop: '8px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </form>
        ) : (
          <div className="success-container">
            <div className="success-icon-wrapper">
              <svg viewBox="0 0 52 52" className="checkmark-svg">
                <path 
                  className="checkmark-path"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  d="M14.1 27.2l7.1 7.2 16.7-16.8" 
                />
              </svg>
            </div>
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-text">
              Thank you for reaching out. I'll get back to you as soon as possible, typically within 24 hours.
            </p>
            <button 
              className="glow-btn" 
              style={{ marginTop: '24px', background: 'transparent', border: '1px solid var(--border)', boxShadow: 'none' }}
              onClick={() => {
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitted(false);
              }}
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
      {/* Social Links inside Contact Page */}
      <div className="social-links-section">
        <h4 className="social-links-title">Connect Elsewhere</h4>
        <div className="social-buttons">
          <a 
            href="https://github.com/ansh-v10" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
            aria-label="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/ansh-v10/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
