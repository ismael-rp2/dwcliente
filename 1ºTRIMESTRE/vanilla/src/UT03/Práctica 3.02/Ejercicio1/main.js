"use strict";

import { toCani } from "./biblioteca.js";

const frase = "Una cadena cani es como esta";
console.log(`${toCani(frase)}`);

console.log("\nPrueba de error");
console.log(toCani(644));