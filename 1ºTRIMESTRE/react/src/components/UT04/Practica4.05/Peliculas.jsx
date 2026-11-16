import React from 'react';
import Pelicula from './Pelicula.jsx';
import datosPeliculas from './peliculas.json';
import './Peliculas.css';

// Peliculas obtiene los registros del JSON y genera una tarjeta por cada película.
const Peliculas = () => {
  const peliculas = datosPeliculas.peliculas;

  return (
    <section className="pagina-peliculas">
      <h2>Esta es la página de películas</h2>
      <p className="texto-intro">Listado de películas disponibles en la filmoteca.</p>
      <div className="contenedor-peliculas">
        {peliculas.map((pelicula) => (
          <Pelicula key={pelicula.id} datos={pelicula} />
        ))}
      </div>
    </section>
  );
};

export default Peliculas;
