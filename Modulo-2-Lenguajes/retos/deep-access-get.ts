const deepGet = <T>(obj: T, ...args: string[]) => {
    const firstElement = args.shift()?.toString();

    if (firstElement === undefined) return obj;
    if (firstElement === null) return obj;
    if (!obj[firstElement]) return obj[firstElement];

    if (args.length === 0) return obj[firstElement];
    return deepGet(obj[firstElement], ...args);
};

const myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: 'bingo',
            },
        },
    },
};

console.log(deepGet(myObject, 'x')); // undefined
console.log(deepGet(myObject, 'a')); // 1
console.log(deepGet(myObject, 'b')); // { c: null, d: {....}}
console.log(deepGet(myObject, 'b', 'c')); // null
console.log(deepGet(myObject, 'b', 'd', 'f', 'g')); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}
