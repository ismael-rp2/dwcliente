import React from 'react';
import Actor from './Actor.jsx';
import './Elenco.css';

// Elenco recibe los intérpretes de una película y reutiliza el componente Actor.
const Elenco = ({ actores }) => (
  <section className="elenco">
    <h4>Elenco</h4>
    <div className="elenco-lista">
      {actores.map((actor, indice) => (
        <Actor key={`${actor.nombre}-${indice}`} datosActor={actor} />
      ))}
    </div>
  </section>
);

export default Elenco;
