"use strict";

import {curso, discente } from "./biblioteca.js";

console.log("--- EJERCICIO 3: MATRICULAR ---");

// Vemos que el array está vacío al principio
console.log("Alumnado antes:", curso.alumnado); 

// Llamamos al método del propio objeto pasándole la alumna
curso.matricular(discente);

// Vemos que la alumna completa (como objeto) se ha guardado dentro
console.log("Alumnado después:", curso.alumnado); 
