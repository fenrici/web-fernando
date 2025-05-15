import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clubesFer from '../assets/clubes-fer.jpeg';
import medicoFer from '../assets/medicofer.jpeg';
import principalFernando from '../assets/principal-fernando.jpeg';
import './Experience.css';

const experienceData = [
  {
    title: "Fisioterapeuta Personal",
    description: "José Sosa, Erik Lamela, Alejandro 'Papu' Gómez, entre otros."
  },
  {
    title: "Director de Kinesiología y Fisioterapia",
    description: "Club Guaraní y Club Olimpia (Paraguay – Copa Libertadores)"
  },
  {
    title: "Kinesiólogo en Clubes Internacionales",
    description: "FC Metalist (Ucrania), Besiktas y Milan"
  },
  {
    title: "Fundador y Co-fundador",
    description: "IReF, Modelarte Spa, KineticSports (Laboratorio de biomecánica 3D) y CONCIF (Consultoría Científica en Fútbol)"
  }
];

const clubsData = [
  "Estudiantes de La Plata", "Belgrano", "Bayern Múnich", "SSC Napoli", 
  "Málaga", "Atlético de Madrid", "Besiktas", "Milan", 
  "Club Guaraní", "Club Olimpia", "Trabzonspor", "Atlas", 
  "Fenerbahce", "Sevilla FC"
];

const clubsBranches = [
  ["Estudiantes de La Plata", "Belgrano", "Bayern Múnich"],
  ["SSC Napoli", "Málaga", "Atlético de Madrid"],
  ["Besiktas", "Milan", "Club Guaraní"],
  ["Club Olimpia", "Trabzonspor", "Atlas"],
  ["Fenerbahce", "Sevilla FC"]
];

const Experience = forwardRef((props, ref) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [clubsInViewRef, clubsInView] = useInView({
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

  const clubVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section ref={setRefs} className="experience section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Experiencia Profesional Destacada
        </motion.h2>
        
        <div className="experience-flex-layout">
          <motion.img 
            src={principalFernando} 
            alt="Fernando Dignani" 
            className="experience-photo"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            className="experience-cards-list"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {experienceData.map((item, index) => (
              <motion.div 
                key={index} 
                className="card experience-card"
                variants={itemVariants}
              >
                <h3 className="card-title">{item.title}</h3>
                <p className="experience-description">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div ref={clubsInViewRef} className="clubs-section">
          <motion.h3 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={clubsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Clubes Asistidos
          </motion.h3>

          <div className="clubs-flex-layout">
            <div className="clubs-images">
              <img src={medicoFer} alt="Fernando como médico" className="club-image" />
            </div>
            <div className="clubs-tree">
              {clubsBranches.map((branch, i) => (
                <div className="clubs-branch" key={i}>
                  {branch.map((club, j) => (
                    <motion.div 
                      key={club}
                      className="club-node"
                      initial={{ opacity: 0, y: 30 }}
                      animate={clubsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, delay: 0.1 * (i + j) }}
                      whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(41,98,255,0.13)" }}
                    >
                      {club}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience; 