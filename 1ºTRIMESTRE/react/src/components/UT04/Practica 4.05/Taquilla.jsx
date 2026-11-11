import React from 'react'

const Taquilla = ({recaudacion}) => {
  return (
    <>
        <div className='taquilla-container'>
            <span className='etiqueta-roja'>Taquilla</span>
            <p className='recaudacion-texto'>{recaudacion}</p>
        </div>
    </>
  )
}

export default Taquilla