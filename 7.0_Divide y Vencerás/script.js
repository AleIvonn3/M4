function findMax(arr) {
    // Caso base: si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    return leftMax > rightMax ? leftMax : rightMax;
}

// Ejemplo de entrada
const numbers1 = [3, 8, 2, 10, 5, 7];
console.log("Números de la serie:", numbers1); // muestra la secuencia de números
console.log("El numero mayor encontrado fue",findMax(numbers1)); // Salida esperada: 10

// Ejemplo 2
const numbers2 = [2, 6, 111, 81, 54, 32, 15, 77, 100, 63, 90, 8, 44];
console.log("Números de la serie 2:", numbers2); // muestra la secuencia de números
console.log("El numero mayor encontrado fue",findMax(numbers2)); // Salida esperada: 111