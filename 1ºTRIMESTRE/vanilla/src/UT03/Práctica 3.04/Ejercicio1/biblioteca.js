"use strict";

const nombres = ["Ismael", "Mar", "Antonio", "Ana", "Esperanza", "Zeta"];

/**
 * 🟢 UT03: forEach SÓLO para ejecutar efectos secundarios (imprimir) 
 * ya que devuelve undefined.
 */
const imprimirArray = (lista) => {
    lista.forEach((valor, indice) => {
        console.log(`${indice + 1}.- ${valor}`);
    });
};

const nombresMayuscula = (lista) => {
    // 🟢 UT03: Cláusula de guarda
    if (!Array.isArray(lista) || lista.length === 0) {
        console.error(`ERROR - Se debe recibir un objeto ARRAY, zoquete.`);
        return;
    }

    // 🟢 UT03: map() es obligatorio para transformar devolviendo un NUEVO array
    const listaEnMayusculas = lista.map((valor) => valor.toUpperCase());
    imprimirArray(listaEnMayusculas);
};

const nombresOrdenadorReves = (lista) => {
    if (!Array.isArray(lista) || lista.length === 0) {
        console.error(`ERROR - Se debe recibir un objeto ARRAY, zoquete.`);
        return;
    }

    // 🟢 UT03: PROHIBIDO usar .sort() y .reverse() mutadores.
    // Usamos los métodos inmutables modernos (.toSorted y .toReversed)
    // que devuelven un array nuevo automáticamente sin tocar el original.
    // Además podemos encadenarlos porque devuelven arrays.
    const listaReves = lista.toSorted().toReversed();
    
    imprimirArray(listaReves);
};

const objetoJSON = (lista) => {
    if (!Array.isArray(lista) || lista.length === 0) {
        console.error(`ERROR - Se debe recibir un objeto ARRAY, zoquete.`);
        return;
    }

    // 🟢 UT03: .map() crea el nuevo array de objetos JSON
    const arrayObjetos = lista.map((valor, indice) => {
        return {
            id: indice,
            nombre: valor
        };
    });

    // 🟢 UT03: .forEach() para imprimir y Desestructuración { id, nombre }
    arrayObjetos.forEach(({ id, nombre }) => {
        console.log(`ID: ${id} | Nombre: ${nombre}`);
    });
};

export { nombresMayuscula, nombresOrdenadorReves, objetoJSON, imprimirArray, nombres };