"use strict";

/**
 * EJERCICIO 2: Temporizador
 * Realiza una cuenta atrás mostrando el tiempo restante por consola.
 * 
 * @param {Number} minutos - Minutos iniciales (o segundos si falta el 2º parámetro).
 * @param {Number} segundos - Segundos iniciales (opcional).
 */
const temporizador = (minutos, segundos) => {
    
    // 1. REASIGNACIÓN (Si solo entra un parámetro)
    if (segundos === undefined) {
        segundos = minutos;
        minutos = 0;
    }

    // 2. CLÁUSULA DE GUARDA (Portero de discoteca)
    if (!Number.isInteger(minutos) || minutos < 0 || !Number.isInteger(segundos) || segundos < 0 || segundos > 59) {
        console.error(`ERROR - Los datos son inválidos. Aprende a escribir tiempos, ¡zoquete!`);
        return;
    }

    // Informamos al usuario fuera del bucle
    console.log(`Iniciando temporizador: ${minutos} min y ${segundos} s.`);
    
    // 3. CÁLCULO INICIAL
    let tiempoTotal = (minutos * 60) + segundos;

    // 4. EL BUCLE DE TIEMPO
    const idIntervalo = setInterval(() => {
        
        // A) Extraemos minutos y segundos del tiempo total restante
        const minActuales = Math.floor(tiempoTotal / 60);
        const segActuales = tiempoTotal % 60;

        // B) Formateo PRO (Opcional pero da puntos extra). 
        // padStart(2, "0") hace que "5" se convierta en "05".
        const minFormateado = String(minActuales).padStart(2, "0");
        const segFormateado = String(segActuales).padStart(2, "0");

        // C) Imprimimos el tiempo debidamente formateado
        console.log(`Tiempo restante -> ${minFormateado}:${segFormateado}`);

        // D) Restamos 1 segundo para la próxima vuelta
        tiempoTotal--;

        // E) Comprobación de fin
        if (tiempoTotal < 0) {
            console.log(`¡TIEMPO TERMINADO!`);
            clearInterval(idIntervalo); // Matamos el proceso en segundo plano
        }

    }, 1000); 
};

export { temporizador };