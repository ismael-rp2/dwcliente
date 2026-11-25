"use strict";

/**
 * Desplegar el siguiente elemnto par al hacer clic
 *  sobre un elemento impar.
 * @param {Event} evento - Evento para desplebar el siguiente hermano 
 */
const acordeon = (evento) => {
    if (evento.target.classList.contains(`cabecera`)) {
        const contenido = evento.target.nextElementSibling;
        contenido.classList.toggle(`oculto`);
        
        const elemento = evento.target.textContent;
        const hijo = contenido.textContent;
        
        console.log(`Contenido del ${elemento}\n"${hijo}"`);
    }
}

export {acordeon};