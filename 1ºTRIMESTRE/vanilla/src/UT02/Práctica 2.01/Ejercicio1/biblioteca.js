"use strict";

/**
 * Función para calcular el Índice de Masa Corporal (IMC).
 * @param {number} masa - La masa en kilogramos.
 * @param {number} altura - La altura en metros.
 * @returns {number} El valor calculado del IMC.
 */
const calcularIMC = (masa, altura) => masa / (altura * altura);

// Exportamos la función para poder usarla en otros archivos
export { calcularIMC };