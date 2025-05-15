import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const educationData = [
  {
    title: "Máster en Podología Deportiva",
    institution: "WAPS",
    year: 2023
  },
  {
    title: "Especialización en Kinesiología Deportiva",
    institution: "Universidad de San Martín",
    year: 2010
  },
  {
    title: "Lic. en Kinesiología y Fisiatría",
    institution: "Universidad Abierta Interamericana",
    year: 2004
  },
  {
    title: "Técnico Radiólogo",
    institution: "Cruz Roja Argentina",
    year: 1999
  }
];

const Education = forwardRef((props, ref) => {
  const [inViewRef, inView] = useInView({
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
    <section ref={setRefs} className="education section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Formación Académica
        </motion.h2>
        
        <div className="timeline-photo-layout">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              {educationData.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="education-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Education; 