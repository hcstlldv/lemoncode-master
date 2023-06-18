let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => {
    console.log('repetitions:', repetitions);
    console.log('text:', text);
    return count++, `${text} `.repeat(repetitions).trim();
};

const memoizeC = (func: (...args) => string) => {
    const mappedResults: Record<string, string> = {};

    return (...args) => {
        const key = args;
        const resKey = JSON.stringify(key);

        if (resKey in mappedResults) {
            return mappedResults[resKey];
        }

        const result = func(...args);
        mappedResults[resKey] = result;
        return result;
    };
};

const memoizedGreet = memoizeC(repeatText);

console.log(memoizedGreet(1, 'pam')); // pam
console.log(memoizedGreet(3, 'chun')); // chun chun chun
console.log(memoizedGreet(1, 'pam')); // pam
console.log(memoizedGreet(3, 'chun')); // chun chun chun
console.log(count);
