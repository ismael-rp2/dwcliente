"use strict";

const cargarDatosLentamente = (datos) => {
    // 1. Selecciona el div con id "pantalla" y aborta si no existe.
    
    // 2. Crea una variable 'contador' inicializada a 0 (recuerda usar let, no const, porque va a cambiar).
    
    // 3. Crea un setInterval que se ejecute cada 1000 milisegundos y guárdalo en una constante (ej: const reloj = setInterval(...))
    
    // 4. DENTRO del intervalo, pon un if/else:
    //    - IF: Si el contador es menor que la longitud del array (datos.length):
    //          Extrae el objeto de esa posición ( ej: datos[contador] ), inyecta su HTML (un div con clase 'producto-card') y súmale 1 al contador.
    //    - ELSE: Si ya hemos llegado al final:
    //          Usa clearInterval(reloj) para matar el proceso.
    //          Inyecta un <p class="fin">¡Carga completada!</p>.

    // Tu código aquí...
};

export { cargarDatosLentamente };