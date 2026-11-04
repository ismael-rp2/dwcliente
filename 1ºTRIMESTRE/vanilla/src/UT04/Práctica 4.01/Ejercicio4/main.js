// main.js
"use strict";

import { insertAfter } from './biblioteca.js';

setTimeout(() => {
    // 1. Seleccionamos un elemento que ya exista en el DOM (nuestra referencia)
    // Suponiendo que en el HTML hay un <p id="parrafoReferencia">Soy el párrafo 1</p>
    const parrafoExistente = document.getElementById("parrafoReferencia");

    if (parrafoExistente) {
        // 2. Creamos el nuevo elemento que queremos insertar
        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "¡Párrafo 2, insertado mágicamente después del 1!";
        nuevoParrafo.style.color = "blue"; // Para que se vea claro el cambio

        // 3. Ejecutamos nuestra flamante función
        insertAfter(nuevoParrafo, parrafoExistente);
        
        console.log("Elemento insertado con éxito usando insertAfter.");
    } else {
        console.error("No se ha encontrado el elemento de referencia.");
    }
}, 2000);
