import { Link, useNavigate } from 'react-router-dom';

/**
 * Componente que muestra las prácticas de la UT03
 */
const Tema03 = () => {
  const navigate = useNavigate();

  // Función manejadora para el botón (lowerCamelCase) - Ejercicio 4
  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>UT03 - Fundamentos de React</h2>
      <p>Selecciona una práctica para ejecutarla:</p>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        
        <li style={{ marginBottom: '1rem' }}>
            <Link to="/ut03/practica-examen" style={{ color: '#4fc1ff', textDecoration: 'none', fontSize: '1.2rem' }}>
              {'>'} Práctica Examen (Multiejercicio)
            </Link>
        </li>
        
        <li style={{ marginBottom: '1rem' }}>
          <Link to="/ut03/practica-3-09" style={{ color: '#4fc1ff', textDecoration: 'none', fontSize: '1.2rem' }}>
            {'>'} Práctica 3.09
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
        Volver al Inicio
      </button>
    </div>
  );
};

export default Tema03;