import React from 'react';

const Actor = ({ datosActor }) => {
    const { foto, nombre, biografia } = datosActor;

    return (
        <div className="actor-card">
            <div className="actor-foto-container">
                <span className="etiqueta-verde-oscura">Foto</span>
                <img src={foto} alt={`Foto de ${nombre}`} className="actor-foto" />
            </div>
            <div className="actor-info">
                <h4>{nombre}</h4>
                <p>{biografia}</p>
            </div>
        </div>
    );
};

export default Actor;