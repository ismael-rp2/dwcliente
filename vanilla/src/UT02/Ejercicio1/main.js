"use strict";

/*
*   Lo mejor es hacerlo todo en una sola línea,
*   cuentos menos líneas mejor. Ejemplo:
*   Tiene IMCMayor(calcularIMC(peso1, altura1), calcularIMC(peso2, altura2));
*/

import { calcularIndiceMasaCorporal, tieneIMCMayor } from "./biblioteca.js";

let imc1 = calcularIndiceMasaCorporal(70, 1.75);
let imc2 = calcularIndiceMasaCorporal(80, 1.80);

let pesoMayor = tieneIMCMayor(imc1, imc2);

console.log(`¿Tiene Marcos un IMC mayor que Juan?: ${pesoMayor ? "Sí" : "No"}`);