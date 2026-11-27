"use strict";

/**
 * Para mostrar el contenido de cada nombre según el propio nombre
 * @param {Event} evento - El evento que llega desde el main 
 * @returns {void}
 */
const mostrarContenido = (evento) => {
    const elemento = evento.target;

    if (elemento.classList.contains('melchor')) {
        desplegarContenido('melchor');

    } else if (elemento.classList.contains('gaspar')) {
        desplegarContenido('gaspar');

    } else if (elemento.classList.contains('baltasar')) {
        desplegarContenido('baltasar');

    } else if (elemento.id === 'primer-div') {
        console.log(`Estoy tocando el body`)
        return;

    } else {
        error();
    }
};



/**
 * Desplegar el contenido en base al nombre sobre el que se ha hecho clic.
 * @param {String} nombre - Nombre de la persona para desplegar su contenido.
 */
const desplegarContenido = (nombre) => {
  const segundoDiv = document.getElementById('segundo-div');
  const parrafos = segundoDiv.querySelectorAll(`.${nombre}`);
  
  parrafos.forEach((parrafo) => {
    parrafo.classList.toggle('oculto');
  });
};



/**
 * Muestra un mensaje de error por pantalla. 
 * Lo he comprobado modificando el HTML.
 */
const error = () => {
    const body = document.body;
    console.log(body);
    body.insertAdjacentHTML(`beforeend`, `
        <p class="error">
            ERROR - No existe el rey mago. 
        </p>`);
};

export {mostrarContenido};