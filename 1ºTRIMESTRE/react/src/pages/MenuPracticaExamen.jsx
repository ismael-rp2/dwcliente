import { Link, useNavigate } from 'react-router-dom';

/**
 * Componente intermedio que lista los ejercicios de la Práctica Examen.
 */
const MenuPracticaExamen = () => {
  const navigate = useNavigate();

  // Función para subir un nivel en la jerarquía (volver a UT03)
  const handleReturnToTema = () => {
    navigate('/ut03');
  };

  return (
    <div>
      <h2>[UT03] - Práctica Examen</h2>
      <p>Selecciona qué componente quieres renderizar:</p>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          {/* Ruta final donde cargaremos tu Ejercicio 1 real */}
          <Link to="/ut03/practica-examen/ejercicio1" style={{ color: '#ce9178', textDecoration: 'none', fontSize: '1.2rem' }}>
            {'>'} "./Ejercicio1.jsx"
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link to="/ut03/practica-examen/ejercicio2" style={{ color: '#ce9178', textDecoration: 'none', fontSize: '1.2rem' }}>
            {'>'} "./Ejercicio2.jsx"
          </Link>
        </li>
        {/* Puedes añadir el resto de ejercicios siguiendo este patrón */}
      </ul>

      <button 
        onClick={handleReturnToTema}
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
        cd .. (Volver a UT03)
      </button>
    </div>
  );
};

export default MenuPracticaExamen;