"use strict";

import { calculadora } from "./biblioteca.js";

// El main.js queda mucho más limpio porque la función ya devuelve el texto formateado.
console.log("--- PRUEBAS DE LA CALCULADORA ---");
console.log(calculadora(24, 2, "+"));
console.log(calculadora(24, 0, "/"));
console.log(calculadora(24, 0, "%"));
console.log(calculadora(-24, 2, "-")); // Ahora esta operación SÍ funcionará
console.log(calculadora(24, 0, "&"));