function findLongestWord(text) {
    // Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        // Comparar la longitud de la palabra actual con la más larga
        if (words[i].length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = words[i];
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo 1 de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// Llama a la función y muestra el resultado
console.log("Texto = "+(text));
console.log(findLongestWord(text) + ": es la palabra mas larga del texto"); // Resultado esperado: "programación"