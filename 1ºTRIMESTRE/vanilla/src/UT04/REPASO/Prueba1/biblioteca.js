"use strict";

const inyectarCajas = (cantidad) => {
    // 1. Seleccionamos el contenedor una sola vez fuera del bucle
    const contenedor = document.body;

    for (let i = 1; i <= cantidad; i++) {
        const crearDiv = document.createElement('div');
        crearDiv.textContent = `Caja numero ${i}`;
        
        // 2. Usamos classList, que es la forma segura y obligatoria
        crearDiv.classList.add('caja-creada');

        contenedor.appendChild(crearDiv);
    }
};


const destacarSegundaCaja = () => {
    //¿Cuál es la diferencia entre querySelectorAll y getElementsByName?
    const claseCaja = document.querySelectorAll('.caja-creada');

    if(claseCaja.length >= 2){
        claseCaja[1].classList.add('destacada');
    }
};


const eliminarCajasPares = () => {
    //Seleccionar cajas
    const cajas = document.querySelectorAll(`.caja-creada`);

    cajas.forEach((valor, indice) => {
        if((indice + 1) %2 === 0){
            valor.remove();
            console.log(`Elemento: ${valor.textContent} eliminado`);
        }
    });


};

// 3. Exportamos una sola vez
export { inyectarCajas, destacarSegundaCaja, eliminarCajasPares };