import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import quienesfer from '../assets/quienesfer.jpeg';

const About = forwardRef((props, ref) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const setRefs = (node) => {
    // Asignar ambos refs al mismo nodo
    ref.current = node;
    inViewRef(node);
  };

  return (
    <section ref={setRefs} className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Quién es Fernando Dignani
        </motion.h2>
        
        <motion.div 
          className="about-content about-flex"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={quienesfer} alt="Fernando Dignani" className="about-photo" />
          <div className="about-text">
            <p>Es un reconocido kinesiólogo argentino con más de 20 años de trayectoria en el ámbito deportivo de alto rendimiento. Ha trabajado con futbolistas de elite y clubes internacionales en Europa, América y Asia. Además, es autor de dos libros y creador del Método FD+, un enfoque integral para la evaluación, prevención y tratamiento de lesiones deportivas.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About; 