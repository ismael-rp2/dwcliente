import React from 'react'
import Actor from './Actor';

const Elenco = ({actores}) => {
  return (
    <>
    <span className='etiqueta-azul'>Elenco</span>
        <div className='Elenco'>
            {actores.map((actor, indice) => (
                <Actor key={indice} datosActor={actor} />
            ))}
        </div>
    </>  
  );
}

export default Elenco
