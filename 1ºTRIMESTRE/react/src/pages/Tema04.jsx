import { Link, useNavigate } from 'react-router-dom';

/**
 * Componente que muestra las prácticas de la UT04
 */
const Tema04 = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>UT04 - React Avanzado</h2>
      <p>Selecciona una práctica para ejecutarla:</p>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link to="/ut04/practica-4-05" style={{ color: '#4fc1ff', textDecoration: 'none', fontSize: '1.2rem' }}>
            {'>'} Práctica 4.05 (Películas y Taquilla)
          </Link>
        </li>
      </ul>

      <button 
        onClick={handleReturnHome}
        style={{
          marginTop: '2rem',
          backgroundColor: 'transparent',
          color: '#569cd6',
          border: '1px solid #569cd6',
          padding: '8px 16px',
          cursor: 'pointer',
          fontFamily: 'monospace'
        }}
      >
        cd .. (Volver al Inicio)
      </button>
    </div>
  );
};

export default Tema04;