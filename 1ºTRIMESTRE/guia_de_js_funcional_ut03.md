# Guía Definitiva de JavaScript Funcional para React (UT03)

Esta guía recopila los patrones, métodos y buenas prácticas exigidas para la programación reactiva e inmutable. 

*Recordatorio fundamental:* Todo archivo debe empezar con `"use strict";`.

---

## 1. Arrays: Validación y Generación Inmutable

### 1.1 Validar un Array (Cláusula de Guarda)
Siempre debemos comprobar que recibimos un array válido y con datos antes de procesarlo.

**Uso:** Evitar que el código "pete" si nos pasan un `null`, un objeto o un array vacío.
```javascript
const comprobarArray = (lista) => {
    // Si NO es un array O su longitud es 0
    if (!Array.isArray(lista) || lista.length === 0) {
        console.error("ERROR - Datos inválidos o array vacío.");
        return false;
    }
    return true;
};
```

### 1.2 Generar un Array Aleatorio (Sin `.push()`)
Para respetar la inmutabilidad, añadimos elementos creando copias superficiales con el *Spread Operator* (`...`).

**Uso:** Llenar datos dinámicamente sin mutar la variable original directamente.
```javascript
const generarAleatorios = (cantidad) => {
    let numeros = []; // Debe ser 'let' para poder reasignar
    
    for (let i = 0; i < cantidad; i++) {
        const aleatorio = Math.floor(Math.random() * 10) + 1;
        // INMUTABILIDAD: copiamos lo anterior y añadimos el nuevo al final
        numeros = [...numeros, aleatorio]; 
    }
    return numeros;
};
```

---

## 2. Iteradores de Array (Callbacks)

Los métodos iteradores reciben un *callback* (función flecha) que procesa cada elemento. El *callback* siempre recibe estos parámetros opcionales: `(valor, indice, array)`.

### 2.1 `.forEach()` (Solo para recorrer e imprimir)
**Qué hace:** Ejecuta una función por cada elemento.
**Qué devuelve:** `undefined`. **No** crea un array nuevo.
**Cuándo usarlo:** Cuando quieres efectos secundarios (como imprimir por consola).

```javascript
const imprimirLista = (lista) => {
    lista.forEach((valor, indice) => {
        console.log(`Posición ${indice}: ${valor}`);
    });
};
```

### 2.2 `.map()` (Para transformar)
**Qué hace:** Ejecuta una función por cada elemento y guarda el resultado.
**Qué devuelve:** Un **nuevo array** del mismo tamaño que el original.
**Cuándo usarlo:** Cuando quieres modificar todos los datos (ej. pasar a mayúsculas, extraer un dato).

```javascript
const nombres = ["ana", "luis"];
const nombresMayusculas = nombres.map((valor) => valor.toUpperCase());
// Devuelve: ["ANA", "LUIS"]
```

### 2.3 `.filter()` (Para filtrar)
**Qué hace:** Evalúa una condición (`true` o `false`) para cada elemento.
**Qué devuelve:** Un **nuevo array** solo con los elementos que cumplieron la condición (devolvieron `true`).
**Cuándo usarlo:** Para buscar, eliminar elementos inmutables o discriminar datos.

```javascript
const numeros = [1, 5, 8, 10];
const mayoresDeCinco = numeros.filter((valor) => valor > 5);
// Devuelve: [8, 10]
```

### 2.4 `.reduce()` (Para acumular/sumar)
**Qué hace:** Recorre el array acumulando un resultado paso a paso.
**Qué devuelve:** Un único valor final (puede ser un número, un string, etc.).
**Parámetros especiales:** `(acumulador, valor, indice, array)`. Necesita un valor inicial al final (ej. `0`).

```javascript
const notas = [5, 7, 8];
// El acumulador empieza en 0. En cada vuelta suma el valor actual.
const sumaTotal = notas.reduce((acumulador, valor, indice, array) => {
    return acumulador + valor;
}, 0); 
// Devuelve: 20
```

---

## 3. Búsqueda y Comprobación en Arrays

### 3.1 `.some()` (¿Al menos uno cumple?)
**Qué hace:** Pregunta si algún elemento cumple una condición. En cuanto uno dice que sí, para.
**Qué devuelve:** `true` o `false`.

```javascript
const edades = [15, 16, 18, 14];
const hayMayores = edades.some((valor) => valor >= 18); // true
```

### 3.2 `.includes()` (¿Contiene este valor exacto?)
**Qué hace:** Busca un valor primitivo exacto dentro del array.
**Qué devuelve:** `true` o `false`.

```javascript
const frutas = ["pera", "manzana"];
const tieneManzana = frutas.includes("manzana"); // true
```

### 3.3 `.indexOf()` y `.lastIndexOf()` (¿En qué posición está?)
**Qué hacen:** Buscan un valor y te dicen su índice. `indexOf` busca desde el principio; `lastIndexOf` busca desde el final hacia atrás.
**Qué devuelven:** El índice numérico (ej. `0`, `2`). Si no lo encuentran, devuelven `-1`.
**Truco UT03:** Útiles para saber si hay repetidos (si el primer índice no coincide con el último).

```javascript
const lista = [10, 20, 30, 10];
lista.indexOf(10);     // Devuelve 0 (lo encuentra al principio)
lista.lastIndexOf(10); // Devuelve 3 (lo encuentra al final)
```

### 3.4 `.slice()` (Para extraer porciones inmutables)
**Qué hace:** Corta un "trozo" del array.
**Qué devuelve:** Un **nuevo array** con la porción extraída. El original queda intacto.

```javascript
const meses = ["Ene", "Feb", "Mar", "Abr"];
const primerTrimestre = meses.slice(0, 3); // Del 0 al 2. Devuelve ["Ene", "Feb", "Mar"]
```

---

## 4. Objetos JSON: Acceso, Modificación e Iteración

### 4.1 Acceso Simple y Anidado
Para acceder, usamos el punto (`.`). Si el objeto tiene otros objetos dentro, encadenamos los puntos.

```javascript
const usuario = {
    nombre: "Laura",
    contacto: {
        direccion: {
            calle: "Falsa 123",
            pais: "España"
        }
    }
};

// Acceso simple
console.log(usuario.nombre); // "Laura"
// Acceso anidado
console.log(usuario.contacto.direccion.calle); // "Falsa 123"
```

### 4.2 Añadir o Modificar Propiedades (Inmutablemente)
Para no mutar el objeto original, usamos el Spread Operator para expandir lo viejo y añadir o sobreescribir lo nuevo.

```javascript
// Añadir un 'codigoPostal' sin romper el objeto original
const usuarioActualizado = {
    ...usuario,
    contacto: {
        ...usuario.contacto,
        direccion: {
            ...usuario.contacto.direccion,
            codigoPostal: "03600"
        }
    }
};
```

### 4.3 Recorrer e Imprimir un Objeto JSON
Los objetos no tienen `.forEach()`. Usamos el bucle `for...in`.

```javascript
const imprimirObjeto = (objeto) => {
    for (const clave in objeto) {
        console.log(`Clave: ${clave} | Valor: ${objeto[clave]}`);
    }
};
```

---

## 5. Desestructuración (ES6)
Nos permite extraer datos de arrays u objetos y guardarlos en variables de forma limpia y directa.

### 5.1 En Objetos
Las llaves `{}` indican que queremos sacar propiedades por su nombre exacto.
```javascript
const persona = { nombre: "Carlos", edad: 30, ciudad: "Madrid" };

// Sacamos nombre y edad directamente a variables
const { nombre, edad } = persona;
console.log(nombre); // "Carlos"
```

### 5.2 En Arrays
Los corchetes `[]` indican que queremos sacar elementos por su posición.
```javascript
const podio = ["Oro", "Plata", "Bronce"];

// El primero va a 'ganador', el resto (...) va a 'perdedores'
const [ganador, ...perdedores] = podio;

console.log(ganador);    // "Oro"
console.log(perdedores); // ["Plata", "Bronce"]
```