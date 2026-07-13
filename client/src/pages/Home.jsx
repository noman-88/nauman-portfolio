import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';

function Home() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
