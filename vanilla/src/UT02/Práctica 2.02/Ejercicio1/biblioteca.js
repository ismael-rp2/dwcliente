"use strict";

/**
 * Asignamos cada número a su nombre del mes correspondiente
 * @param {numeroMes} un número  
 * @returns {mesNombre} un mes
 */
const saberMes = (numeroMes) => {
    let mesNombre;
    switch (numeroMes){
        case 1: mesNombre = `El número ${numeroMes} es Enero`;break;
        case 2: mesNombre = `El número ${numeroMes} es Febrero`; break;
        case 3: mesNombre = `El número ${numeroMes} es Marzo`; break;
        case 4: mesNombre = `El número ${numeroMes} es Abril`; break;
        case 5: mesNombre = `El número ${numeroMes} es Mayo`; break;
        case 6: mesNombre = `El número ${numeroMes} es Junio`; break;
        case 7: mesNombre = `El número ${numeroMes} es Julio`; break;
        case 8: mesNombre = `El número ${numeroMes} es Agosto`; break;
        case 9: mesNombre = `El número ${numeroMes} esSeptiembre`; break;
        case 10: mesNombre = `El número ${numeroMes} es Octube`; break;
        case 11: mesNombre = `El número ${numeroMes} es Noviembre`; break;
        case 12: mesNombre = `El número ${numeroMes} es Diciembre`; break;
        default:
            console.log(`Pedazo de malandrín el ${numeroMes} no corresponde a ningún mes`);
            return;
    }
    return mesNombre;
}

export {saberMes};
   