export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">About <span>Me</span></h2>
        <p className="section-subtitle reveal">Get to know the person behind the code</p>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>Hi, Nama saya<strong>Sebastian</strong> seorang pelajar yang memiliki ketertarikan besar di dunia teknologi, terutama di bidang pengembangan
            web <strong>Front-end.</strong> Saya mulai belajar coding sejak tahun 2024 dan hingga sekarang terus mengembangkan kemampuan dalam menggunakan HTML, CSS, dan JavaScript untuk membuat tampilan website yang menarik dan interaktif.</p>

<p>Saat ini, saya sedang menempuh pendidikan di SMK Galajuara dengan Jurusan Teknologi Komputer dan Telekomunikasi, yang memberikan saya dasar kuat dalam logika pemrograman dan pemecahan masalah. Saya selalu antusias untuk belajar teknologi baru dan menciptakan solusi digital yang elegan dan efisien.</p>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="about-stats">
              <div className="stat-card"><div className="stat-number">2+</div><div className="stat-label">Years Experience</div></div>
              <div className="stat-card"><div className="stat-number">20+</div><div className="stat-label">Projects Done</div></div>
              <div className="stat-card"><div className="stat-number">20+</div><div className="stat-label">Happy Clients</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
