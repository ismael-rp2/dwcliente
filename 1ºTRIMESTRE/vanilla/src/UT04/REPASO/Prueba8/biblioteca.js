"use strict";

/**
 * 
 * @param {Array<{id: number, texto: string, obligatoria: boolean}>} arrayPoliticas 
 * @returns 
 */
const imprimirPoliticas = (arrayPoliticas) => {

    if(!Array.isArray(arrayPoliticas) || arrayPoliticas.length === 0){
        const body = document.body;
        body.insertAdjacentHTML(`beforeend`, `<h1 style="color: red">
        <strong>ERROR. EL ARRAY ES INVÁLIDO, ZOQUETE.</strong>
        </h1>`);
        console.error(`ERROR. EL ARRAY ES INVÁLIDO, ZOQUETE.`);
        return;
    };
    console.log(`Array válido`);

    //Seleccionar id caja-normas
    const idCajaNormas = document.querySelector(`#caja-normas`);
    if(!idCajaNormas) return;
    
    const arrayFiltrado = arrayPoliticas.filter((valor, indice) => {
        return valor.obligatoria === true;
    });

    arrayFiltrado.forEach((valor, indice)=> {
        idCajaNormas.insertAdjacentHTML(`beforeend`, `<p>${valor.texto}</p>`);
    });
};

export {imprimirPoliticas};