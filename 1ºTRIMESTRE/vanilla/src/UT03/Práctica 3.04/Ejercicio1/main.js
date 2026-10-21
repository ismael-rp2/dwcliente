"use strict";

import { nombresMayuscula, nombresOrdenadorReves, objetoJSON, imprimirArray,nombres } from "./biblioteca.js";

console.log(`MAYUSCULAS`);
imprimirArray(nombres);

console.log(`\nMAYUSCULAS`)
nombresMayuscula(nombres);

console.log(`\nALFABETICAMENTE AL REVES`)
nombresOrdenadorReves(nombres);

console.log(`\nObjeto JSON`)
objetoJSON(nombres);