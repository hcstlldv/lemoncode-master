export function clone(source) {
    return JSON.parse(JSON.stringify(source));
}

export function merge(source, target) {
    return {
        ...target,
        ...source,
    };
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
var b = { name: 'Luisa', age: 31, married: true };

// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
