import React, { useState, useEffect } from 'react';
import Pelicula from './Pelicula';
import datosPeliculas from './peliculas.json';

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        setPeliculas(datosPeliculas.peliculas);
    }, []); 

    return (
        <div className="contenedor-peliculas">
            {peliculas.map((pelicula) => (
                <Pelicula key={pelicula.id} datos={pelicula} />
            ))}
        </div>
    );
};

export default Peliculas;