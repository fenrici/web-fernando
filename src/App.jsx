import { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Method from './sections/Method';
import Publications from './sections/Publications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const methodRef = useRef(null);
  const publicationsRef = useRef(null);
  const contactRef = useRef(null);
  
  const refs = {
    about: aboutRef,
    education: educationRef,
    experience: experienceRef,
    method: methodRef,
    publications: publicationsRef,
    contact: contactRef
  };

  return (
    <div className="app">
      <Navbar refs={refs} />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About ref={aboutRef} />
          <Education ref={educationRef} />
          <Experience ref={experienceRef} />
          <Method ref={methodRef} />
          <Publications ref={publicationsRef} />
          <Contact ref={contactRef} />
        </motion.div>
      </main>
      <Footer />
      </div>
  );
}

export default App;
