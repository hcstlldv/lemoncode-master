function includes(array: number[], value: number): boolean {
    if (!array) return false;
    let found: boolean = false;
    array.forEach((item) => {
        if (value === item) {
            found = true;
            return;
        }
    });
    return found;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

function includes2(array: number[], value: number): boolean {
    if (!array) return false;
    let found: boolean = false;
    if (array.indexOf(value) !== -1) {
        found = true;
    }
    return found;
}
