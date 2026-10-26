"use strict";

import { llenarArraySinRepetidos, repetirNumeroArray } from "./biblioteca.js"; 

const miArray = llenarArraySinRepetidos();
console.log(miArray);

console.log(repetirNumeroArray([1, 2, 3, 4, 5, 6, 7, 8, 9])); // false
console.log(repetirNumeroArray([1, 2, 3, 4, 2, 6, 7, 8, 9])); //true