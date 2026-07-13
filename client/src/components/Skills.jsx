import './Skills.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React', percent: 95 },
  { icon: <FaNodeJs />, name: 'Node JS', percent: 90 },
  { icon: <SiExpress />, name: 'Express', percent: 90 },
  { icon: <SiMongodb />, name: 'MongoDB', percent: 88 },
  { icon: <FaHtml5 />, name: 'HTML5', percent: 100 },
  { icon: <FaCss3Alt />, name: 'CSS3', percent: 98 },
  { icon: <FaJs />, name: 'JavaScript', percent: 95 },
  { icon: <SiTailwindcss />, name: 'Tailwind', percent: 92 },
  { icon: <FaGitAlt />, name: 'Git', percent: 90 },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h5>MY SKILLS</h5>
      <h2>Technologies I Work With</h2>

      <div className="skills-grid">
        {skills.map((item, index) => (
          <motion.div
            className="skill-card"
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <div className="progress">
              <div className="progress-fill" style={{ width: `${item.percent}%` }}></div>
            </div>
            <span>{item.percent}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
