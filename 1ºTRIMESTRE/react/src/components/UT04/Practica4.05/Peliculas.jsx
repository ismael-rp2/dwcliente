import React from 'react';
import { Link } from 'react-router-dom';
import datosPeliculas from './peliculas.json';
import './Peliculas.css';

/**
 * Peliculas muestra un resumen de cada película del archivo JSON.
 * Cada tarjeta es un enlace a su detalle, identificado por el id.
 */
const Peliculas = () => {
  const peliculas = datosPeliculas.peliculas;

  return (
    <section className="pagina-peliculas">
      <h2>Esta es la página de películas</h2>
      <p className="texto-intro">Selecciona una película para consultar toda su información.</p>
      <div className="contenedor-peliculas">
        {peliculas.map((pelicula) => (
          <Link
            className="peliculas-enlace"
            key={pelicula.id}
            to={`${pelicula.id}`}
            aria-label={`Ver detalles de ${pelicula.nombre}`}
          >
            <img className="peliculas-miniatura" src={pelicula.cartelera} alt={`Cartel de ${pelicula.nombre}`} />
            <div className="peliculas-datos">
              <h3>{pelicula.nombre}</h3>
              <p>Año de estreno: {pelicula.anio}</p>
              <span className="peliculas-ver">Ver información completa</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Peliculas;
