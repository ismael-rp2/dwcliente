"use strict";

/**
 * EJERCICIO 5: Busca cuántos DNI en un rango concreto tienen una letra específica.
 * @param {String} letraBuscada - La letra mayúscula a buscar.
 */
const buscarDniPorLetra = (letraBuscada) => {
    
    // 1. PORTERO DE DISCOTECA
    // Validamos que sea un texto, que no esté vacío y que solo tenga 1 carácter.
    if (typeof letraBuscada !== 'string' || letraBuscada.length !== 1) {
        console.error("ERROR - Debes introducir una única letra, zoquete.");
        return;
    }

    // Por seguridad, la pasamos a mayúsculas para evitar fallos si el usuario mete 'a' en vez de 'A'
    const letra = letraBuscada.toUpperCase();

    // 2. VARIABLES ACUMULADORAS (¡Sin usar arrays!)
    let contador = 0;
    let listadoDNI = ""; // Nuestro "pergamino" de texto

    const inicio = 48357001;
    const fin = 48360000;

    // 3. BUCLE DE BÚSQUEDA
    for (let numeroActual = inicio; numeroActual <= fin; numeroActual++) {
        
        // REUTILIZAMOS la función del Ejercicio 3 pasándole el número actual del bucle
        const letraCalculada = calcularLetraDNI(numeroActual);

        // Si la letra que calcula el Ministerio coincide con la que buscamos...
        if (letraCalculada === letra) {
            // Aumentamos el contador
            contador++;
            
            // Añadimos el DNI formateado a nuestro pergamino de texto, 
            // seguido de \n para que el siguiente DNI baje a la línea de abajo.
            listadoDNI += `  - ${numeroActual}-${letra}\n`;
        }
    }

    // 4. SALIDA "DE UNA SOLA VEZ"
    // El profesor pide imprimir el número y el listado formateados.
    // Usamos console.log una sola vez con un Template Literal gigante.
    console.log(`
--- BÚSQUEDA DE DNI ---
Se han encontrado ${contador} documentos con la letra '${letra}':
${listadoDNI}
-----------------------`);
};

export { buscarDniPorLetra }; // Añade esto a tus exportaciones al final del archivo