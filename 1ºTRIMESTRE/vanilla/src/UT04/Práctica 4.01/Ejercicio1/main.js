"use strict";

import {
    contarParrafos,
    textoSegundoParrafo,
    contarEnlaces,
    direccionPrimerEnlace,
    direccionPenultimoEnlace
} from './biblioteca.js';

setTimeout(() => {
    const destino = document.getElementById("info");

    if (destino) {
        // Envolvemos en un div para darle estilo si queremos, y usamos <ul>
        const infoHTML = `
            <div style="background-color: #f0f0f0; padding: 15px; border: 1px solid #ccc; margin-bottom: 20px;">
                <h3>Resultados del análisis (Ejercicio 1)</h3>
                <ul>
                    <li><strong>Número de párrafos:</strong> ${contarParrafos()}</li>
                    <li><strong>Texto del 2º párrafo:</strong> ${textoSegundoParrafo()}</li>
                    <li><strong>Número de enlaces:</strong> ${contarEnlaces()}</li>
                    <li><strong>Primer enlace:</strong> ${direccionPrimerEnlace()}</li>
                    <li><strong>Penúltimo enlace:</strong> ${direccionPenultimoEnlace()}</li>
                </ul>
            </div>
        `;
        
        // Y luego insertamos
        destino.insertAdjacentHTML('beforeend', infoHTML);
    } else {
        console.error("No se ha encontrado el contenedor con id 'info'.");
    }
}, 2000);