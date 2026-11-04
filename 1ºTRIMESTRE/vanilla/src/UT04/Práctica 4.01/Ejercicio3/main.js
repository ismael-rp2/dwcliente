"use strict";

// Importamos el diccionario de frases y las herramientas de la biblioteca
import { quijoteFrases } from './quijoteFrases.js';
import { generarFilaTabla } from './biblioteca.js';

// Seleccionamos el cuerpo de la tabla donde insertaremos las filas
const tbody = document.getElementById("bodyTabla");

if (tbody) {

    let contador = 0;

    const intervalo = setInterval(() => {
        // Comprobamos que aún queden frases en el array
        if (contador < quijoteFrases.length) {
            const fraseActual = quijoteFrases[contador];
            const nuevaFila = generarFilaTabla(fraseActual);
            
            // Insertamos la fila al final del tbody
            tbody.insertAdjacentHTML('beforeend', nuevaFila);
            
            contador++; // Pasamos a la siguiente frase
        } else {
            clearInterval(intervalo);
            console.log("Se han mostrado todas las frases del diccionario.");
        }
    }, 1000);
    
} else {
    console.error("Error: No se ha encontrado el elemento con id 'bodyTabla'.");
}
