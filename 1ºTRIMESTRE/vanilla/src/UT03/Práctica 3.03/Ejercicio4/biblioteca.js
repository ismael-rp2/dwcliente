"use strict";

const imprimirObjeto = (objeto) => {
    
    // 1. TU PORTERO (¡Lo mantenemos porque está perfecto!)
    if(typeof objeto !== 'object' || objeto === null || Array.isArray(objeto)){
        console.error(`ERROR - El elemento debe ser de tipo objeto, zoquete`);
        return;
    }

    console.log(`\n--- ANÁLISIS DEL OBJETO ---`);

    // 2. RECORREMOS EL OBJETO (Igual que en el Ejercicio 1)
    for (const clave in objeto) {
        
        // Guardamos el valor actual en una constante para que sea más fácil trabajar
        // PISTA: Usa los corchetes con la variable 'clave'
        const valorActual = objeto[clave];
        
        let mensajeSalida = `Clave: "${clave}" -> `;

        // 3. ACTUAMOS SEGÚN EL TIPO (El corazón del ejercicio)
        // Usamos if / else if para clasificar cada cosa
        
        if (typeof valorActual === 'number') {
            mensajeSalida += `[NÚMERO] Su valor es ${valorActual}`;
            
        } else if (typeof valorActual === 'string') {
            mensajeSalida += `[CADENA] Su texto es "${valorActual}"`;
            
        } else if (typeof valorActual === 'function') {
            mensajeSalida += `[MÉTODO] Es una función ejecutable`;
            // Nota: no imprimimos el valorActual directo porque nos imprimiría todo el código de la función
            
        } else if (Array.isArray(valorActual)) {
            // ¡La trampa del array controlada!
            mensajeSalida += `[ARRAY] Contiene ${valorActual.length} elementos: [${valorActual.join(", ")}]`;
            
        } else if (typeof valorActual === 'object' && valorActual !== null) {
            // Si es objeto, pero no es Array, ni es null...
            mensajeSalida += `[OBJETO ANIDADO] Contiene otro objeto dentro`;
            
        } else {
            mensajeSalida += `[OTRO] Tipo no contemplado (${typeof valorActual})`;
        }

        // 4. IMPRIMIMOS LA LÍNEA
        console.log(mensajeSalida);
    }
    
    console.log(`---------------------------\n`);
};

export { imprimirObjeto };