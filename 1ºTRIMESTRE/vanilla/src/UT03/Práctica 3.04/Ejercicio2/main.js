"use strict";

import { generarArray, imprimirArray, arrayNuevo } from "./biblioteca.js";


const array1 = generarArray();
const array2 = generarArray();
const array3 = generarArray();


console.log("ARRAY 1");
imprimirArray(array1);

console.log("\nARRAY 2");
imprimirArray(array2);

console.log("\nARRAY 3");
imprimirArray(array3);

console.log(`\nARRAY > 5`)
arrayNuevo(array1, array2, array3);