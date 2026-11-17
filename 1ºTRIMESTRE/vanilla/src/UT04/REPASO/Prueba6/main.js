"use strict";
import { lanzarNotificaciones } from './biblioteca.js';

const avisos = [
    "Servidor iniciado.",
    "Nuevo usuario registrado.",
    "Error de conexión en base de datos.",
    "Copia de seguridad completada."
];

lanzarNotificaciones(avisos);