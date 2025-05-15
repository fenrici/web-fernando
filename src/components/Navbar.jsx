import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ refs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollTo = (ref) => {
    setMobileMenuOpen(false);
    if (refs[ref] && refs[ref].current) {
      refs[ref].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navbarClass = `navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? '' : 'navbar-hidden'}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <div className="logo" onClick={scrollToTop}>
          Fernando Dignani
        </div>

        <div className="desktop-menu">
          <ul className="nav-links">
            <li><button onClick={scrollToTop}>Inicio</button></li>
            <li><button onClick={() => scrollTo('about')}>Quién Soy</button></li>
            <li><button onClick={() => scrollTo('education')}>Formación</button></li>
            <li><button onClick={() => scrollTo('experience')}>Experiencia</button></li>
            <li><button onClick={() => scrollTo('method')}>Método FD+</button></li>
            <li><button onClick={() => scrollTo('publications')}>Publicaciones</button></li>
            <li><button onClick={() => scrollTo('contact')}>Contacto</button></li>
          </ul>
        </div>

        <button 
          className="mobile-menu-button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              <li><button onClick={scrollToTop}>Inicio</button></li>
              <li><button onClick={() => scrollTo('about')}>Quién Soy</button></li>
              <li><button onClick={() => scrollTo('education')}>Formación</button></li>
              <li><button onClick={() => scrollTo('experience')}>Experiencia</button></li>
              <li><button onClick={() => scrollTo('method')}>Método FD+</button></li>
              <li><button onClick={() => scrollTo('publications')}>Publicaciones</button></li>
              <li><button onClick={() => scrollTo('contact')}>Contacto</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 