import { useState, useEffect } from 'react';
import { Icons } from './Icons';
import profileImg from '../assets/images/Tian.png';

export default function Hero() {
  const roles = ['Frontend Developer', 'UI/UX Enthusiast', 'React Specialist', 'Creative Coder'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image-wrapper reveal">
            <img src={profileImg} alt="Sebastian" className="hero-image" />
          </div>
          <div>
            <p className="hero-greeting reveal">👋 Hi, I'm</p>
            <h1 className="hero-name reveal reveal-delay-1">Sebastian</h1>
            <p className="hero-role reveal reveal-delay-2">{displayText}<span className="cursor"></span></p>
            <p className="hero-desc reveal reveal-delay-3">
              I craft beautiful, performant web experiences with modern technologies. Passionate about clean code, intuitive interfaces, and pushing the boundaries of what's possible on the web.
            </p>
            <div className="hero-buttons reveal reveal-delay-4">
              <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
                {Icons.download} Download CV
              </a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
                {Icons.send} Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
