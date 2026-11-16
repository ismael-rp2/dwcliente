import React, { useRef } from 'react';
import Elenco from './Elenco';
import Taquilla from './Taquilla';
const Pelicula = ({ datos }) => {
    const { nombre, cartelera, resumen, actores, recaudacion } = datos;

    const elencoRef = useRef(null);
    const taquillaRef = useRef(null);

    const botonElenco = () => {
        if (elencoRef.current) {
            elencoRef.current.classList.toggle('oculto');
        }
    };

    const botonTaquilla = () => {
        if (taquillaRef.current) {
            taquillaRef.current.classList.toggle('oculto');
        }
    };

    return (
        <div className="pelicula-card">
            <span className="etiqueta-roja">Contenedor</span>
            <h2 className="titulo-pelicula">{nombre}</h2>
            
            <div className="contenido-principal">
                <div className="cartela-container">
                    <span className="etiqueta-morada">Portada</span>
                    <img src={cartelera} alt={`Cartel de ${nombre}`} className="cartela" />
                </div>
                
                <div className="resumen-container">
                    <span className="etiqueta-negra">Resumen</span>
                    <p className="resumen">{resumen}</p>
                </div>
            </div>

            <div>
                <button onClick={botonElenco}>Elenco</button>
                <button onClick={botonTaquilla} >Taquilla</button>
            </div>

            <div ref={elencoRef} className="oculto">
                <Elenco actores={actores} />
            </div>

            <div ref={taquillaRef} className="oculto">
                <Taquilla recaudacion={recaudacion} />
            </div>
        </div>
    );
};

export default Pelicula;