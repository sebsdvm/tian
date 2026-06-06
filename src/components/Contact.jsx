import { useState } from 'react';
import { Icons } from './Icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title reveal">Get In <span>Touch</span></h2>
        <p className="section-subtitle reveal">Have a project in mind? Let's talk about it</p>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let's work together</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className="contact-links">
              <a href="mailto:sebastian@example.com" className="contact-link-item">
                <span className="contact-link-icon">{Icons.email}</span>
                <span>tianpubg09@gmail.com</span>
              </a>
              <a href="https://github.com/sebsdvm" target="_blank" rel="noreferrer" className="contact-link-item">
                <span className="contact-link-icon">{Icons.github}</span>
                <span>github.com/sebsdvm</span>
              </a>
              <a href="https://www.instagram.com/sebsdv1?igsh=MXZ6ZjBzbHpvbjFpOQ==" target="_blank" rel="noreferrer" className="contact-link-item">
                <span className="contact-link-icon">{Icons.instagram}</span>
                <span>@sebsdv1</span>
              </a>
            </div>
          </div>
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit} noValidate>
            {success && <div className="form-success">✓ Message sent successfully! I'll get back to you soon.</div>}
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" value={form.name} onChange={handleChange('name')} placeholder="Your name" />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-input" value={form.email} onChange={handleChange('email')} placeholder="your@email.com" />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea className="form-textarea" value={form.message} onChange={handleChange('message')} placeholder="Tell me about your project..." />
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {Icons.send} Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
                }
