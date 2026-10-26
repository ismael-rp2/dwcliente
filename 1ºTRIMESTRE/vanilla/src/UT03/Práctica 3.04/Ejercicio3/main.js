"use strict";

import { 
    nuevoUsuario, 
    mayoresDeEdad, 
    correoYahoo, 
    temaClaro, 
    faltanDatos, 
    anadirApellidos, 
    codigoPostal 
} from "./biblioteca.js";

console.log("--- 1. INSERTAR NUEVO USUARIO ---");
const amigo = {
    nombre: "Javier",
    preferencias: { tema: "oscuro", idioma: "español", edad: 28 },
    contacto: {
        direccion: { calle: "Avenida 1", localidad: "Petrer", pais: "España" },
        correoelectronico: "javi@gmail.com",
        telefono: "987654321"
    }
};
const listaConNuevo = nuevoUsuario(amigo);
console.log(listaConNuevo);

console.log("\n--- 2. MAYORES DE EDAD ---");
console.log(mayoresDeEdad());

console.log("\n--- 3. CORREOS YAHOO ---");
console.log(correoYahoo());

console.log("\n--- 4. TEMA CLARO, +18 Y ESPAÑA ---");
console.log(temaClaro());

console.log("\n--- 5. FALTAN DATOS (Sin teléfono) ---");
console.log(faltanDatos());

console.log("\n--- 6. AÑADIR APELLIDOS ---");
console.log(anadirApellidos());

console.log("\n--- 7. CÓDIGO POSTAL POR DEFECTO ---");
// Hacemos un stringify para poder ver los objetos anidados en la consola sin que ponga [object Object]
console.log(codigoPostal());