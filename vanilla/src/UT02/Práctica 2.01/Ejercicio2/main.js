"use strict";

import { calcularMedia, mostrarGanador } from "./biblioteca.js";

const puntosJuan = [89, 120, 103];
const puntosMiguel = [116, 94, 123];
const puntosMaria = [97, 134, 105];

const mediaJuan = calcularMedia(puntosJuan);
const mediaMiguel = calcularMedia(puntosMiguel);
const mediaMaria = calcularMedia(puntosMaria);

console.log(`${mostrarGanador(mediaJuan, mediaMiguel, mediaMaria)}`);