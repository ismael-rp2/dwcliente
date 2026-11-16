import { Link } from 'react-router-dom';
import './Menu.css';

/**
 * Componente Menu: Barra de navegación principal de la aplicación.
 * Permite cambiar de ruta sin recargar la página gracias a <Link>.
 */
const Menu = () => {
  return (
    <nav className="navBar">

    <div className="navLogo">
      <span>{"<MisPracticas />"}</span>
    </div>
      
      <ul className="navLinks">
        {/* Rutas principales del portafolio */}
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/ut03">UT03 (Fundamentos)</Link></li>
        <li><Link to="/ut04">UT04 (Avanzado)</Link></li>
        <li><Link to="/acerca-de">Acerca De</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;