import { Icons } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="nav-logo" style={{ fontSize: '1.8rem' }}>
              Sebastian
            </a>
            <p>Crafting beautiful digital experiences with modern web technologies. Let's build something amazing together.</p>
            <div className="social-links">
              <a href="https://github.com/sebsdvm" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                {Icons.github}
              </a>
              <a href="https://www.instagram.com/sebsdv1?igsh=MXZ6ZjBzbHpvbjFpOQ==" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                {Icons.instagram}
              </a>
              <a href="mailto:tianpubg09@gmail.com.com" className="social-link" aria-label="Email">
                {Icons.email}
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Landing Pages</a></li>
              <li><a href="#services">Maintenance</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} Sebastian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
