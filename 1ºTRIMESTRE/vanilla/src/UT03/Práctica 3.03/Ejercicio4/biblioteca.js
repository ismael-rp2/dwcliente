"use strict";

// 1. PRIMERO PONEMOS LA CALCULADORA (Del ejercicio 3)
const calcularLetraDNI = (numeroDNI) => {
    const letrasOficiales = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = numeroDNI % 23;
    return letrasOficiales[resto];
};


// 2. LUEGO PONEMOS EL BUSCADOR (Del ejercicio 5)
const buscarDniPorLetra = (letraBuscada) => {
    
    if (typeof letraBuscada !== 'string' || letraBuscada.length !== 1) {
        console.error("ERROR - Debes introducir una única letra, zoquete.");
        return;
    }

    const letra = letraBuscada.toUpperCase();
    let contador = 0;
    let listadoDNI = ""; 

    const inicio = 48357001;
    const fin = 48360000;

    for (let numeroActual = inicio; numeroActual <= fin; numeroActual++) {
        
        // ¡AQUÍ ESTABA EL ERROR! 
        // Ahora sí que encuentra 'calcularLetraDNI' porque está declarada justo arriba.
        const letraCalculada = calcularLetraDNI(numeroActual);

        if (letraCalculada === letra) {
            contador++;
            listadoDNI += `  - ${numeroActual}-${letra}\n`;
        }
    }

    console.log(`\n--- BÚSQUEDA DE DNI ---
Se han encontrado ${contador} documentos con la letra '${letra}':
${listadoDNI}
-----------------------`);
};

// 3. EXPORTAMOS
export { buscarDniPorLetra, calcularLetraDNI };