"use strict";

import { tablas, imprimirTabla } from "./biblioteca.js";

console.log("-- EJERCICIO 2 --");
tablas(1, imprimirTabla); // Error: menor que 2
tablas(5, "hola"); // Error: no es función
tablas(5, imprimirTabla); // Funciona