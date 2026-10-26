import { useState } from 'react';
import peliculasJSON from '../../../assets/peliculas.json';
import './Peliculas.css';

// 🟢 Componente Actor (Verde)
const Actor = ({ foto, nombre, biografia }) => {
    return (
        <div className='actor-caja-verde'>
            <img src={foto} alt={nombre} />
            <div>
                <h4>{nombre}</h4>
                <p>{biografia}</p>
            </div>
        </div>
    );
};

// 🟢 Componente Elenco (Azul)
const Elenco = ({ actores = [] }) => {
    return (
        <div className='elenco-caja-azul'>
            <h3>Elenco</h3>
            {/* Iteramos de forma segura con el encadenamiento opcional */}
            {actores?.map((valor, indice) => (
                <Actor 
                    key={indice}
                    foto={valor.foto}
                    nombre={valor.nombre}
                    biografia={valor.biografia}
                />
            ))}
        </div>
    );
};

// 🟢 Componente Pelicula (Naranja)
const Pelicula = ({ titulo, cartela, resumen, actores }) => {
    return (
        <div className='pelicula-caja-naranja'>
            <h2>{titulo}</h2>
            <div className='cartela-resumen-flex'>
                {/* Prop de la imagen sin comillas para que se evalúe correctamente */}
                <img src={cartela} alt={`Cartel de ${titulo}`} className='cartela-caja-morada' />
                <p className='resumen-caja-negra'><strong>Resumen:</strong> <br/> {resumen}</p>
            </div>
            <Elenco actores={actores} />
        </div>
    );
};

// 🟢 Componente Padre (Gestión del estado)[cite: 12, 14]
const Peliculas = () => {
    // Inicializamos el estado directamente con los datos del JSON[cite: 12]
    const [listaPeliculas, setListaPeliculas] = useState(peliculasJSON);

    return (
        <div className="contenedor-principal">
            <h1 className="titulo-app">Cartelera de Cine (Con Estado)</h1>
            
            {listaPeliculas?.map((peliculaActual, indice) => (
                <Pelicula 
                    key={indice} 
                    titulo={peliculaActual.titulo}
                    cartela={peliculaActual.cartela}
                    resumen={peliculaActual.resumen}
                    actores={peliculaActual.actores} 
                />
            ))}
        </div>
    );
};

export default Peliculas;