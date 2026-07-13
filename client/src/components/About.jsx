import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/profile.png" alt="Nauman" />
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4>ABOUT ME</h4>
        <h2>Kureshi Nauman Khan</h2>
        <p>
          I am a passionate full-stack developer who builds modern, fast and premium web experiences using React, Node.js, MongoDB and Three.js.
        </p>

        <div className="info">
          <div>
            <h3>Experience</h3>
            <span>Fresher</span>
          </div>
          <div>
            <h3>Projects</h3>
            <span>10+</span>
          </div>
          <div>
            <h3>Location</h3>
            <span>Visnagar</span>
          </div>
        </div>

        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default About;
