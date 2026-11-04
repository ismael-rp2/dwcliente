import React, { useState } from 'react';

const suscripcionesJSON = [
  { id: 1, servicio: "Netflix", precio: 12, fechaRenovacion: "2026-11-05" },
  { id: 2, servicio: "Spotify", precio: 10, fechaRenovacion: "2026-12-12" }
];

const GestorSuscripciones = () => {
    const [suscripciones, setSuscripciones] = useState(suscripcionesJSON);

    // FUNCIÓN AYUDANTE: Solo formatea texto, no toca el estado
    const formatearFecha = (fechaOriginal) => {
        const fechaObj = new Date(fechaOriginal);
        const dia = String(fechaObj.getDate()).padStart(2, '0');
        const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
        const anyo = fechaObj.getFullYear();
        return `${dia}/${mes}/${anyo}`;
    };

    // ¡ESTO LO HICISTE PERFECTO!
    const anadirHBO = () => {
        const nuevoObjeto = { id: 3, servicio: "HBO", precio: 9, fechaRenovacion: "2026-11-20" };
        const yaExiste = suscripciones.some((valor) => valor.id === nuevoObjeto.id);

        if(!yaExiste){
            setSuscripciones([...suscripciones, nuevoObjeto]);
        } else {
            console.log("ERROR - El objeto ya existe");
        }
    };

    // FUNCIÓN MODIFICAR: map -> return -> setSuscripciones
    const subirPrecio = (idBuscado) => {
        const suscripcionesActualizadas = suscripciones.map((valor) => {
            if(valor.id === idBuscado){
                // Retornamos el objeto modificado usando spread
                return { ...valor, precio: valor.precio + 2 };
            } 
            // Si no es el id buscado, lo devolvemos igual
            return valor;
        });
        setSuscripciones(suscripcionesActualizadas);
    };

    return (
        <div>
            <ul>
                {suscripciones.map((valor) => (
                    <li key={valor.id}>
                        <strong>Servicio:</strong> {valor.servicio} | 
                        <strong> Precio:</strong> {valor.precio}€ 
                        
                        {/* AÑADIDA LA FUNCIÓN FLECHA PARA PASAR EL ID */}
                        <button onClick={() => subirPrecio(valor.id)} style={{ margin: "0 10px" }}>Subir 2€</button>
                        
                        {/* LLAMAMOS A LA FUNCIÓN AYUDANTE */}
                        <strong>Fecha:</strong> {formatearFecha(valor.fechaRenovacion)}
                    </li>
                ))}
            </ul>
            <button onClick={anadirHBO}>Añadir HBO</button>
        </div>
    );
};

export default GestorSuscripciones;