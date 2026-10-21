"use strict";

/**
 * Función PURA: Calcula la letra de un DNI.
 * @param {Number} numeroDNI - El número de DNI sin letra.
 * @returns {String} La letra correspondiente.
 */
const calcularLetraDNI = (numeroDNI) => {
    // Esta es la cadena oficial del Ministerio del Interior
    const letrasOficiales = "TRWAGMYFPDXBNJZSQVHLCKE";
    
    // Obtenemos el resto de la división entre 23
    const resto = numeroDNI % 23;
    
    // Usamos el resto como índice para sacar la letra (ej: si el resto es 0, saca la 'T')
    return letrasOficiales[resto];
};

/**
 * Función principal: Ejecuta el temporizador y solicita los DNIs.
 */
const solicitarDNI = () => {
    // 1. Aquí guardaremos las letras que vayamos calculando
    const letrasCalculadas = [];
    
    console.log("Iniciando solicitud de DNIs. El prompt aparecerá cada 5 segundos...");

    // 2. Iniciamos el temporizador
    const idIntervalo = setInterval(() => {
        
        // A) Pedimos el dato al usuario
        const datoIntroducido = prompt("Introduce un número de DNI (o escribe '-1' para salir):");

        // B) CONDICIÓN DE PARADA (¡Muy importante!)
        // Si el usuario escribe "-1" o le da a Cancelar (que devuelve null)
        if (datoIntroducido === "-1" || datoIntroducido === null) {
            
            // 1º Matamos el temporizador para que no vuelva a salir el prompt
            clearInterval(idIntervalo);
            
            // 2º Imprimimos el resultado (todas las letras seguidas)
            // .join("") une un array en un texto sin separadores
            console.log(`\nProceso terminado. Las letras de los DNI introducidos son: ${letrasCalculadas.join("")}`);
            
            // 3º Hacemos un return para salir de esta vuelta del temporizador
            return; 
        }

        // C) PORTERO DE DISCOTECA: Validamos que el dato sea un número válido
        // Convertimos el texto del prompt a un Número real
        const numeroDNI = Number(datoIntroducido);

        if (!Number.isInteger(numeroDNI) || numeroDNI < 0) {
            console.error(`ERROR - "${datoIntroducido}" no es un DNI válido, zoquete.`);
            // Hacemos return, pero OJO: solo aborta esta vuelta. 
            // Dentro de 5 segundos el setInterval volverá a preguntar.
            return;
        }

        // D) LÓGICA DE NEGOCIO: Si todo está bien, calculamos y guardamos
        const letraEncontrada = calcularLetraDNI(numeroDNI);
        letrasCalculadas.push(letraEncontrada);
        
        console.log(`DNI procesado. Letra calculada: ${letraEncontrada} (esperando 5 segundos...)`);

    }, 5000); // 5000 milisegundos = 5 segundos
};

export { solicitarDNI };