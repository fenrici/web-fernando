import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCube, FaWalking, FaCamera, FaDumbbell } from 'react-icons/fa';
import './Method.css';
import ferLamela from '../assets/fernando-lamela.jpeg';
import ferCopaDelMundo from '../assets/fotofernando-copadelmundo.jpeg';
import ferJoseSosa from '../assets/fer-josesosa.jpeg';

const methodData = [
  {
    title: "Biomecánica 3D",
    description: "Con electromiografía (EMG)",
    icon: FaCube
  },
  {
    title: "Análisis Postural",
    description: "Y de pisada con baropodometría",
    icon: FaWalking
  },
  {
    title: "Ecografía",
    description: "Músculo-esquelética y termografía infrarroja",
    icon: FaCamera
  },
  {
    title: "Evaluaciones de Fuerza",
    description: "Isométrica y dinámica",
    icon: FaDumbbell
  }
];

const Method = forwardRef((props, ref) => {
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
    <section ref={setRefs} className="method section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          El Método FD+
        </motion.h2>
        
        <motion.p 
          className="method-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Un sistema exclusivo de evaluación funcional basado en tecnología avanzada:
        </motion.p>
        
        <div className="method-circles-grid">
          {methodData.map((item, index) => (
            <motion.div 
              key={index} 
              className="method-circle-item"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: index * 0.18 }}
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(41,98,255,0.13)" }}
            >
              <div className="method-circle-icon">
                <item.icon />
              </div>
              <div className="method-circle-title">{item.title}</div>
              <div className="method-circle-desc">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Notable Results Section - Minimalist Redesign */}
      
      <div className="notable-photos-wrapper">
        <div className="notable-photos-minimal-grid">
          <div className="notable-photo-minimal-card">
            <img src={ferLamela} alt="Fernando con Erik Lamela" className="notable-photo minimal lamela-adjust" />
            <div className="notable-photo-minimal-caption">Erik Lamela</div>
          </div>
          <div className="notable-photo-minimal-card">
            <img src={ferCopaDelMundo} alt="Fernando en la Copa del Mundo" className="notable-photo minimal" />
            <div className="notable-photo-minimal-caption">Alejandro Papu Gomez</div>
          </div>
          <div className="notable-photo-minimal-card">
            <img src={ferJoseSosa} alt="Fernando con Jose Sosa" className="notable-photo minimal lamela-adjust" />
            <div className="notable-photo-minimal-caption">Jose Sosa</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Method; 