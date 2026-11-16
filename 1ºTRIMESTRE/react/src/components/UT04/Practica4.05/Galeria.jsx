import React from 'react';
import datosPeliculas from './peliculas.json';
import './Galeria.css';

// Galeria muestra las cartelas en una cuadrícula y sus títulos como leyenda.
const Galeria = () => (
  <section className="pagina-galeria">
    <h2>Esta es la página de galería</h2>
    <p className="texto-intro">Carteles de las películas incluidas en la filmoteca.</p>
    <div className="galeria-grid">
      {datosPeliculas.peliculas.map((pelicula) => (
        <figure className="galeria-elemento" key={pelicula.id}>
          <img src={pelicula.cartelera} alt={`Cartel de ${pelicula.nombre}`} />
          <figcaption>{pelicula.nombre}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Galeria;
