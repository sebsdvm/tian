import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Andi Pratama', role: 'Mahasiswa', text: 'Website yang dibuat sangat rapi dan mudah digunakan. Desainnya juga sesuai dengan yang saya inginkan.', initials: 'AP' },
    {   name: 'Wildan Hartono',
  role: 'Pemilik UMKM',
  text: 'Saya puas dengan hasil website yang dibuat. Proses pengerjaannya cepat dan komunikasinya baik.',
  initials: 'WH' },
    { name: 'Heru Pangetsu', role: 'Pemilik Kedai Kopi',
  text: 'Website yang dibuat sangat membantu usaha saya terlihat lebih profesional. Proses pengerjaannya juga cepat dan sesuai kebutuhan.',
  initials: 'HP' },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title reveal">Client <span>Testimonials</span></h2>
        <p className="section-subtitle reveal">What people say about working with me</p>
        <div className="testimonials-wrapper reveal">
          <div className="testimonials-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div className="testimonial-info"><h4>{t.name}</h4><p>{t.role}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button key={idx} className={`testimonial-dot ${idx === current ? 'active' : ''}`} onClick={() => setCurrent(idx)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
