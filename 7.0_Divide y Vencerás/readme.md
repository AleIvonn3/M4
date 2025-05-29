Objetivo
El alumno debe usar "divide and conquer" encontrar el número máximo un arreglo. Practicará cómo dividir un problema en partes más pequeñas y detener la recursión en un caso base (nuevamente).

Problema: Búsqueda del Máximo en un Arreglo con Divide and Conquer
Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número máximo.

Instrucciones para resolver el problema:
Divide el arreglo en dos mitades.
Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
Combina las soluciones comparando los máximos de ambas mitades.
Devuelve el número máximo encontrado.
Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/3b019c2bcdb4354d6b7b51e1e9e48f7f

function findMax(arr) {
// TODO: Agregar la condición del caso base
if (/_ condición _/) {
return /_ valor _/;
}

    // TODO: Dividir el arreglo en dos mitades
    const mid = /* calcular el punto medio */;
    const left = /* obtener la primera mitad */;
    const right = /* obtener la segunda mitad */;

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = /* llamada recursiva */;
    const rightMax = /* llamada recursiva */;

    // TODO: Combinar las soluciones comparando los máximos
    return /* máximo entre leftMax y rightMax */;

}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10
m m
