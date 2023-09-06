const isPrime = (num: number) => {
    for (let index = 2, square = Math.sqrt(num); index <= square; index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return num > 1;
};

export const showPrimes = (from: number, to: number): number[] => {
    const primes: number[] = [];
    for (let index = from; index <= to; index++) {
        if (isPrime(index)) {
            primes.push(index);
        }
    }
    return primes;
};

console.log(showPrimes(0, 10));
