import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Fernando Dignani
        </motion.h1>
        
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Licenciado en Kinesiología y Fisiatría
        </motion.h2>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Especialista en Kinesiología Deportiva | Máster en Podología Deportiva
        </motion.p>
        
        <motion.p
          className="subtitle"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Creador del innovador Método FD+
        </motion.p>
      </div>
    </section>
  );
};

export default Hero; 