"use strict";

const cargarDatosLentamente = (datos) => {
    // 1. Selecciona el div con id "pantalla" y aborta si no existe.
    const divPantalla = document.getElementById(`pantalla`);
    if(!divPantalla) return;

    // 2. Crea una variable 'contador' inicializada a 0 (recuerda usar let, no const, porque va a cambiar).
    let contador = 0;
    // 3. Crea un setInterval que se ejecute cada 1000 milisegundos y guárdalo en una constante (ej: const reloj = setInterval(...))
    const reloj = setInterval(() => {
        if(contador < datos.length){
            const objeto =  datos[contador];
            divPantalla.insertAdjacentHTML(`beforeend`, `<div class='producto-card'>${objeto.nombre}</div>`);
            contador++;
        } else {
            clearInterval(reloj);
            divPantalla.insertAdjacentHTML(`beforeend`, `<p class="fin">¡Carga completada!</p>.`) ;
        }
    }, 1000);    

};

export { cargarDatosLentamente };