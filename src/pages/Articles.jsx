const Articles = () => {
    return (
      <div className="container mt-4">
        {/* Encabezado */}
        <header className="text-center mb-4">
          <h2 className="fw-bold">Artículos Técnicos</h2>
          <p className="text-muted">Explora los temas más relevantes en la Ingeniería de Software 2025</p>
        </header>
  
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Título del Artículo</th>
                <th>Autor</th>
                <th>Fecha</th>
                <th>Ver más</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microservicios: Escalabilidad y Flexibilidad</td>
                <td>Ana García</td>
                <td>2024-10-26</td>
                <td>
                  <button className="btn btn-primary btn-sm" disabled>Ver más</button>
                </td>
              </tr>
              <tr>
                <td>La Nube y el Desarrollo de Aplicaciones Modernas</td>
                <td>Juan Pérez</td>
                <td>2024-11-05</td>
                <td>
                  <button className="btn btn-primary btn-sm" disabled>Ver más</button>
                </td>
              </tr>
              <tr>
                <td>Blockchain y su Impacto en la Seguridad del Software</td>
                <td>María López</td>
                <td>2024-11-12</td>
                <td>
                  <button className="btn btn-primary btn-sm" disabled>Ver más</button>
                </td>
              </tr>
              <tr>
                <td>Desarrollo Low-Code: Agilidad y Eficiencia</td>
                <td>Carlos Rodríguez</td>
                <td>2024-11-19</td>
                <td>
                  <button className="btn btn-primary btn-sm" disabled>Ver más</button>
                </td>
              </tr>
              <tr>
                <td>El Futuro de la Interfaz de Usuario: Experiencias Inmersivas</td>
                <td>Laura Martínez</td>
                <td>2024-11-26</td>
                <td>
                  <button className="btn btn-primary btn-sm" disabled>Ver más</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
export default Articles;
  
