"use strict";

const fechaEnCastellano = () =>{
    const fechaActual = new Date();

    return fechaActual.toLocaleDateString('es-Es');
};


const fechaConRetraso = () => {
    console.log("Esperando 3 segundos para obtener la fecha del sistema...");

    // setTimeout ejecuta la función flecha interior UNA SOLA VEZ pasados los milisegundos
    setTimeout(() => {
        const fechaFormateada = fechaEnCastellano();
        console.log(`La fecha actual es: ${fechaFormateada}`);
    }, 3000);
};

export { fechaConRetraso };
