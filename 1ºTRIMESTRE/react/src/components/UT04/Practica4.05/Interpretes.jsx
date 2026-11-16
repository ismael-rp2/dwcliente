import React from 'react';
import Actor from './Actor.jsx';
import datosPeliculas from './peliculas.json';
import './Interpretes.css';

// Interpretes reúne los actores de todas las películas y evita repetir nombres.
const Interpretes = () => {
  const todosLosActores = datosPeliculas.peliculas.flatMap((pelicula) => pelicula.actores);
  const actoresUnicos = Array.from(
    new Map(todosLosActores.map((actor) => [actor.nombre, actor])).values()
  );

  return (
    <section className="pagina-interpretes">
      <h2>Esta es la página de intérpretes</h2>
      <p className="texto-intro">Personas que aparecen en los repartos del catálogo.</p>
      <div className="interpretes-lista">
        {actoresUnicos.map((actor) => (
          <Actor key={actor.nombre} datosActor={actor} />
        ))}
      </div>
    </section>
  );
};

export default Interpretes;
