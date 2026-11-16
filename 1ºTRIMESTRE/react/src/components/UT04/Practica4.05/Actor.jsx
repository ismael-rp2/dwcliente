import React from 'react';
import './Actor.css';

// Actor muestra la ficha de una persona del reparto.
// El JSON de esta práctica utiliza la propiedad imagen; foto se admite por compatibilidad.
const Actor = ({ datosActor }) => {
  const { nombre, biografia, imagen, foto, fechaNacimiento } = datosActor;
  const rutaImagen = imagen || foto;

  return (
    <article className="actor-card">
      {rutaImagen && <img src={rutaImagen} alt={`Fotografía de ${nombre}`} className="actor-foto" />}
      <div className="actor-info">
        <h5>{nombre}</h5>
        {fechaNacimiento && <p><strong>Fecha de nacimiento:</strong> {fechaNacimiento}</p>}
        <p>{biografia}</p>
      </div>
    </article>
  );
};

export default Actor;
