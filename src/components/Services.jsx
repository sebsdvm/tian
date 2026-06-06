import { Icons } from './Icons';

export default function Services() {
  const services = [
    { icon: Icons.code, title: 'Web Development', desc: 'Building responsive, performant web applications using modern frameworks.' },
    { icon: Icons.design, title: 'UI/UX Design', desc: 'Creating intuitive, beautiful interfaces that delight users and drive engagement.' },
    { icon: Icons.rocket, title: 'Landing Page Creation', desc: 'Designing high-converting landing pages that effectively communicate your brand.' },
    { icon: Icons.wrench, title: 'Website Maintenance', desc: 'Keeping your website updated, secure, and optimized for the best performance.' },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title reveal">My <span>Services</span></h2>
        <p className="section-subtitle reveal">What I can do for you</p>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={service.title} className={`service-card reveal reveal-delay-${idx + 1}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
