export default function Experience() {
  const education = [
    { 
      year: '2015 - 2021', 
      school: 'SD Santo Yusuf', 
      major: 'Pendidikan Dasar',
      desc: 'Mendapatkan pendidikan dasar dan mulai mengenal penggunaan komputer serta teknologi informasi.' 
    },
    { 
      year: '2021 - 2024', 
      school: 'SMPN 19 Bekasi', 
      major: 'Pendidikan Umum',
      desc: 'Membangun fondasi akademik yang kuat dan mulai mengembangkan ketertarikan pada teknologi dan komputer.' 
    },
    { 
      year: '2024 - Present', 
      school: 'SMK Galajuara', 
      major: 'Teknologi Komputer dan Telekomunikasi',
      desc: 'Mempelajari dasar-dasar pemrograman, pengembangan web, jaringan komputer, dan teknologi informasi. Fokus pada pengembangan skill Frontend Development.' 
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title reveal">My <span>Education</span></h2>
        <p className="section-subtitle reveal">Academic background and learning journey</p>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className={`timeline-item reveal reveal-delay-${(idx % 2) + 1}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{edu.year}</span>
                <h3 className="timeline-title">{edu.school}</h3>
                <p className="timeline-company">{edu.major}</p>
                <p className="timeline-desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
