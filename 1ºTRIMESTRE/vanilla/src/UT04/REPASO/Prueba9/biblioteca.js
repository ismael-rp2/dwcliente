"use strict";

/**
 * { "id": 1, "nombre": "Ana García", "participa": true },
 * @param {JSON<{id: number, nombre: string, participa: boolean}>} jsonString 
 */
const inicializarSorteo = (jsonString) => {
    //Convertir a array
    const jsonArray = JSON.parse(jsonString);
    //console.log(jsonArray)

    const boton = document.querySelector(`#btn-sacar`);
    const resultado = document.querySelector(`#resultado`);

    boton.addEventListener(`click`, () => {
        const arrayParticipantes = jsonArray.filter((valor, indice) => {
            return valor.participa === true;
        });

                //Indice aleatorio
        const aleatorio = Math.floor(Math.random() * arrayParticipantes.length);
        const ganador = arrayParticipantes[aleatorio];
        resultado.innerHTML = `¡El ganador es ${ganador.nombre}!`;


    });
    
};


export {inicializarSorteo};