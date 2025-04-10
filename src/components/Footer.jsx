import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <div className="container">
          <p className="mb-2">© 2025 - Tendencias en Ingeniería de Software</p>
  
          <div className="mb-2">
            <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>
  
          <small>Desarrollado por Yeferson Grajales M</small>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  