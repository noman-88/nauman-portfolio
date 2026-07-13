import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'ElectroStore',
    image: '/projects/project1.jpg',
    alt: 'Project 1',
    tech: ['React', 'E-commerce', 'Responsive'],
    github: '#',
    live: '#',
  },
  {
    title: 'Electric Store',
    image: '/projects/project2.jpg',
    alt: 'Project 2',
    tech: ['React', 'Node', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Admin Dashboard',
    image: '/projects/project3.jpg',
    alt: 'Project 3',
    tech: ['React', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h5>MY WORK</h5>
      <h2>Latest Projects</h2>

      <div className="project-grid">
        {projects.map((item, index) => (
          <motion.div className="project-card" key={index} whileHover={{ y: -12 }}>
            <img src={item.image} alt={item.alt} />

            <div className="project-content">
              <h3>{item.title}</h3>
              <div className="tags">
                {item.tech.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="buttons">
                <a href={item.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={item.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
