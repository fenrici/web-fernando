import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Fernando Dignani. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 