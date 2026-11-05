"use strict";

import { 
    recorrerBody,
    bloquearContenido
 } from "./biblioteca.js";


const palabra = "sexo";

setTimeout(() => {
    // 1. Obtenemos el texto del body
    const htmlActual = recorrerBody();
    
    // 2. Comprobamos si la palabra existe antes de reemplazar
    if (htmlActual.toLowerCase().includes(palabra.toLowerCase())) {
        const nuevoHTML = bloquearContenido(palabra, htmlActual);
        
        // 3. Asignamos el nuevo HTML al body para sobreescribir la página
        document.body.innerHTML = nuevoHTML;
        console.log("Contenido bloqueado exitosamente.");
    } else {
        console.log(`No se encontró la palabra "${palabra}" en el documento.`);
    }

}, 2000);