import { useState } from 'react';
import { Icons } from './Icons';

import project1 from '../assets/images/s.jpg';
import project2 from '../assets/images/file_000000000beb4720796549985bf0bde1c.png';
import project3 from '../assets/images/file_00000000073871faab8145885c8f1685.png';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { 
      title: 'Game Ular', 
      desc: 'Permainan sederhana di mana pemain mengendalikan ular untuk memakan makanan dan mendapatkan skor. Setiap makanan yang dimakan akan membuat ular semakin panjang. Pemain harus menghindari tabrakan dengan tubuh ular sendiri agar permainan tidak berakhir.', 
      tech: ['HTML', 'CSS', 'JavaScript'], 
      category: 'Games', 
      img: project1,
      live: 'https://sebsdvm.github.io/Game-Ular-V2/',
      github: 'https://github.com/sebsdvm/Game-Ular-V2'
    },
    { 
      title: 'Konverter File', 
      desc: 'Web yang memungkinkan pengguna mengubah berbagai format file seperti gambar, dokumen, audio, dan video dengan cepat dan mudah melalui antarmuka yang sederhana dan responsif.', 
      tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'], 
      category: 'Web Application', 
      img: project2,
      live: 'https://sebsdvm.github.io/KonverterFile/',
      github: 'https://github.com/sebsdvm/KonverterFile'
    },
    { 
      title: 'Juu Kyuu Coffee', 
      desc: 'Website profil coffee shop yang menampilkan informasi tentang menu, lokasi, dan identitas brand dengan desain modern yang terinspirasi dari perpaduan budaya Jepang dan cita rasa Indonesia.', 
      tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'], 
      category: 'Company Profile Website', 
      img: project3,
      live: 'https://sebsdvm.github.io/JuuKyuuCoffee/',
      github: 'https://github.com/sebsdvm/JuuKyuuCoffee'
    },
  ];

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const categories = ['All', 'Web Application', 'Games', 'Company Profile Website'];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title reveal">Featured <span>Projects</span></h2>
        <p className="section-subtitle reveal">A selection of my recent work</p>
        <div className="filter-tabs reveal">
          {categories.map((cat) => (
            <button key={cat} className={`filter-tab ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((project, idx) => (
            <div key={project.title} className={`project-card reveal reveal-delay-${(idx % 3) + 1}`}>
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link github"
                  >
                    {Icons.github} GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
