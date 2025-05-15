import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaPodcast, FaChalkboardTeacher, FaNewspaper, FaTrophy } from 'react-icons/fa';
import './Publications.css';
// Import the images
import ferLamela from '../assets/fernando-lamela.jpeg';
import ferPapuGomez from '../assets/fernando-papugomez.jpeg';
import ferCopaDelMundo from '../assets/fotofernando-copadelmundo.jpeg';
import ferJoseSosa from '../assets/fer-josesosa.jpeg';

const publicationsData = [
  {
    title: "Libros Publicados",
    description: "Autor de 'Recuperación Funcional en el Deporte de Elite'",
    icon: FaBook,
    year: "2018"
  },
  {
    title: "Podcasts",
    description: "Colaborador en 'Ciencia y Deporte' y 'Salud Deportiva'",
    icon: FaPodcast,
    year: "2020-presente"
  },
  {
    title: "Conferencias",
    description: "Ponente en congresos internacionales de medicina deportiva",
    icon: FaChalkboardTeacher,
    year: "2015-presente"
  },
  {
    title: "Artículos",
    description: "Publicaciones en revistas especializadas de fisioterapia deportiva",
    icon: FaNewspaper,
    year: "2012-presente"
  }
];

const Publications = forwardRef((props, ref) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [techInViewRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={setRefs} className="publications section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Publicaciones y Divulgación
        </motion.h2>
        
        {/* Horizontal Timeline for Publications */}
        <div className="publications-timeline-container">
          <div className="publications-timeline-line"></div>
          <div className="publications-timeline-items">
            {publicationsData.map((item, index) => (
              <motion.div
                key={index}
                className="publications-timeline-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.18 }}
              >
                <div className="publications-timeline-dot">
                  <item.icon />
                </div>
                <div className="publications-timeline-content">
                  <span className="publication-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="publication-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notable Results Section - Minimalist Redesign */}
        {/*
        <motion.div
          className="notable-results-container minimal"
          initial={{ opacity: 0, y: 30 }}
          animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="notable-results-description minimal">
            📌 Reducción de tiempos de rehabilitación, retorno más rápido al campo de juego, y mejoras funcionales evidentes en casos como Papu Gómez, Erik Lamela y José Sosa.
          </p>
          <div className="notable-photos-minimal-grid">
            <div className="notable-photo-minimal-card">
              <img src={ferLamela} alt="Fernando con Erik Lamela" className="notable-photo minimal" />
              <div className="notable-photo-minimal-caption">Erik Lamela</div>
            </div>
            <div className="notable-photo-minimal-card">
              <img src={ferCopaDelMundo} alt="Fernando en la Copa del Mundo" className="notable-photo minimal" />
              <div className="notable-photo-minimal-caption">Alejandro Papu Gomez</div>
            </div>
            <div className="notable-photo-minimal-card">
              <img src={ferJoseSosa} alt="Fernando con Jose Sosa" className="notable-photo minimal" />
              <div className="notable-photo-minimal-caption">Jose Sosa</div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
});

export default Publications;
