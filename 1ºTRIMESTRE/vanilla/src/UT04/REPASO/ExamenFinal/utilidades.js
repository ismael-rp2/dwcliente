"use strict";

/**
 * Comprobar que es un array válido.
 * @param {*} datos - Datos que se desea validar.
 * @returns {boolean} True si es un array, false en caso contrario.
 */
const esArrayValido = (datos) =>  {
    if(!Array.isArray(datos)){
        console.error(`ERROR - El parámetro introducido no es un array.`);
        return false; 
    }
    return true;
};


/**
 *  Comprobar si el array contiene al menos un elemento.
 * @param {Array} lista - Array que se comprueba.
 * @returns {boolean} True si tiene elementos, false si está vacío.
 */
const tieneContenido = (lista) => {
    if(lista.length === 0){
        console.error(`ERROR - El array introducido, no tiene parámetros.`);
        return false; //No tiene contenido
    }
    return true; //Tiene contenido
};


/**
 * Formatea el precio de una entrada para mostrarlo en pantalla.
 * @param {*} precio - El número del precio de la entrada.
 * @returns {string} "Entrada Gratuita" si es 0, o el precio con dos decimales y €.
 */
const formatearPrecio = (precio) => {
    if(precio === 0){
        return `Entrada Gratuita`;
    }
    return `${precio.toFixed(2)}€`;
};

export {esArrayValido, tieneContenido, formatearPrecio};