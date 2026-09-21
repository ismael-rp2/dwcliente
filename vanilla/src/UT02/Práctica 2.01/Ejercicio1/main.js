"use strict";

import { calcularIMC } from "./biblioteca.js";

// 1. Guardar las masas y alturas de Marcos y Juan en variables
const masaMarcos = 70;
const alturaMarcos = 1.75;
const masaJuan = 80;
const alturaJuan = 1.80;

// 2. Calcular ambos IMC
const imcMarcos = calcularIMC(masaMarcos, alturaMarcos);
const imcJuan = calcularIMC(masaJuan, alturaJuan);

// 3. Crear una variable booleana para saber si Marcos tiene mayor IMC
const tieneMarcosMayorIMC = imcMarcos > imcJuan;

// 4. Mostrar la información en la consola
console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${tieneMarcosMayorIMC ? "Si" : "No"}`);