import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Scene from './Scene';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kureshi Nauman Khan
        </motion.h1>

        <h2>Full Stack Developer</h2>
        <p>React | Node | MongoDB | Three.js</p>

        <div className="hero-buttons">
          <a className="btn1" href="#projects">View Projects</a>
          <a className="btn2" href="#contact">Contact Me</a>
        </div>

        <div className="social">
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/__noman_x/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="hero-right">
        <Scene />
      </div>
    </section>
  );
}
