import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const skills = [
    { name: 'HTML', percent: 95 }, { name: 'CSS', percent: 92 }, { name: 'JavaScript', percent: 90 },
    { name: 'React.js', percent: 52 }, { name: 'Tailwind CSS', percent: 55 }, { name: 'Git & GitHub', percent: 82 }, { name: 'Node.js', percent: 30 },
  ];
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setAnimated(true); }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">My <span>Skills</span></h2>
        <p className="section-subtitle reveal">Technologies I work with on a daily basis</p>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={skill.name} className={`skill-card reveal reveal-delay-${(idx % 4) + 1}`}>
              <div className="skill-header"><span className="skill-name">{skill.name}</span><span className="skill-percent">{skill.percent}%</span></div>
              <div className="skill-bar">
                <div className={`skill-progress ${animated ? 'animated' : ''}`} style={{ width: animated ? `${skill.percent}%` : '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
