"use strict";

import { calcularMedia, mostrarGanador } from "./biblioteca.js";

const puntosJuan = [89, 120, 103];
const puntosMiguel = [116, 94, 123];
const puntosMaria = [97, 134, 105];

// TODO 4 RESUELTO: Así es como se llama a una función pasándole el array, y guardando el retorno.
const mediaJuan = calcularMedia(puntosJuan);
const mediaMiguel = calcularMedia(puntosMiguel);
const mediaMaria = calcularMedia(puntosMaria);

// TODO 5 RESUELTO: Llamamos a la función final pasándole los datos calculados.
console.log(`${mostrarGanador(mediaJuan, mediaMiguel, mediaMaria)}`);