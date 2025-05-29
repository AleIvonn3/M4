Objetivo
El objetivo es que se practique cómo usar recursión para buscar un objeto específico en un arreglo. Practicará cómo dividir un problema en partes más pequeñas y detener la recursión en un caso base.

Problema: Buscar un objeto en una lista de regalos
Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. La lista puede ser bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. Este proyecto se enfoca únicamente en usar recursión para buscar un elemento en un arreglo simple.

Instrucciones para resolver el problema:
Escribe una función recursiva que busque un regalo específico en un arreglo.
Si el regalo se encuentra, devuelve un mensaje indicando su posición.
Si no se encuentra, devuelve un mensaje diciendo que no está en la lista.
Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/07642b0746bb8101258995f539ab372e
Pistas:
Usa un índice inicial (index = 0) para rastrear la posición en el arreglo.
Implementa los casos base sugeridos:
Si index === gifts.length, el regalo no está en la lista.
Si gifts[index] === giftName, el regalo está en esa posición.
Realiza una llamada recursiva aumentando el índice (index + 1).

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
// Caso base: Si llegamos al final de la lista
if (index === gifts.length) {
return `${giftName} no está en la lista.`;
}
// TODO: Incluye el caso base donde se llega al final de la lista.
// TODO: Incluye el caso base donde se encuentra el regalo.
// TODO: Realiza la llamada recursiva para seguir buscando el regalo.
}
// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
// Salida esperada:
// "Camión no está en la lista."
