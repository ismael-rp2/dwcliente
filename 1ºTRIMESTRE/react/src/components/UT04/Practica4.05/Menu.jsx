import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

/** Construye el menú sin NavLink y marca la sección actual. */
const Menu = () => {
  const { pathname } = useLocation();
  const base = '/ut04/practica-4-05';
  const enlaces = [
    { ruta: base, texto: 'Inicio' },
    { ruta: `${base}/peliculas`, texto: 'Películas' },
    { ruta: `${base}/interpretes`, texto: 'Intérpretes' },
    { ruta: `${base}/galeria`, texto: 'Galería' },
    { ruta: `${base}/acerca-de`, texto: 'Acerca de' }
  ];
  return (
    <nav className="menu" aria-label="Menú de Filmoteca">
      {enlaces.map((enlace) => {
        const activo = pathname === enlace.ruta ||
          (enlace.ruta !== base && pathname.startsWith(`${enlace.ruta}/`));
        return (
          <Link key={enlace.ruta} to={enlace.ruta}
            className={activo ? 'menu-enlace activo' : 'menu-enlace'}>
            {enlace.texto}
          </Link>
        );
      })}
    </nav>
  );
};
export default Menu;
