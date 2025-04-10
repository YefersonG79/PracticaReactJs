import imagenIA from "../assets/imagen_ia.jpg";
import imagenDevOps from "../assets/imagen_devops.jpg";
import imagenCiberseguridad from "../assets/cybersecurity.png";

const Home = () => {
    return (
      <div className="container mt-4">
        <header className="text-center mb-5">
          <p className="display-6 fw-bold">Innovando el Futuro Digital</p>
        </header>
  
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={imagenIA} className="card-img-top" style={{ height: '200px', objectFit: 'cover'}}/>
              <div className="card-body">
                <h5 className="card-title">Inteligencia Artificial (IA) en el Desarrollo de Software</h5>
                <p className="card-text">
                  La IA está revolucionando el desarrollo de software, automatizando tareas, mejorando la detección de errores y permitiendo la creación de aplicaciones más inteligentes y personalizadas. Desde la generación de código hasta el análisis predictivo, la IA está impulsando la eficiencia y la innovación en la ingeniería de software.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={imagenDevOps} className="card-img-top" style={{ height: '200px', objectFit: 'cover'}}/>
              <div className="card-body">
                <h5 className="card-title">DevOps y la Automatización del Ciclo de Vida del Software</h5>
                <p className="card-text">
                  DevOps está transformando la forma en que se desarrolla y despliega el software, fomentando la colaboración y la automatización. La integración continua, la entrega continua y la infraestructura como código están acelerando el ciclo de vida del software y mejorando la calidad y la confiabilidad.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={imagenCiberseguridad} className="card-img-top" style={{ height: '200px', objectFit: 'cover'}}/>
              <div className="card-body">
                <h5 className="card-title">Ciberseguridad Integrada en el Desarrollo de Software (DevSecOps)</h5>
                <p className="card-text">
                  Con el aumento de las amenazas cibernéticas, la seguridad se ha convertido en una prioridad fundamental en la ingeniería de software. DevSecOps integra la seguridad en todas las etapas del ciclo de vida del software, garantizando la protección de datos y la prevención de vulnerabilidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  