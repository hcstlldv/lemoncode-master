export function biggestWord(phrase: string): string | undefined {
    const splittedPhrase = phrase.split(' ');
    if (!splittedPhrase) return;
    let longestWord = splittedPhrase[0];
    splittedPhrase.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}

// Ejemplo
console.log(biggestWord('Esta frase puede contener muchas palabras')); // "contener"
console.log(biggestWord('Ejercicios básicos de JavaScript')); // "Ejercicios"
