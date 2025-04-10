import Logo_about from '../assets/Logo_about.jpg';

const About = () => {
    return (
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="rounded-circle overflow-hidden mx-auto" style={{ width: '200px', height: '200px', backgroundColor: '#e9ecef' }}>
              <img src={Logo_about} className="img-fluid rounded-circle"/>
            </div>
          </div>
  
          <div className="col-md-8">
            <h2 className="fw-bold">Yeferson Grajales Morales</h2>
            <p className="lead-6 fw-bold">
              Estudiante de Ingeniería de Software en la Institución Universitaria - Tecnologico de Antioquia, Medellin.
            </p>
            <p className='lead'>
              Este sitio web fue creado como parte de un proyecto académico para compartir información relevante y actualizada sobre las últimas tendencias en ingeniería de software. Nuestro objetivo es contribuir al aprendizaje y la innovación en este apasionante campo.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  