const myObject2 = {};

const isObjEmpty = (obj: Object) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

const deepSet = (value: number, object: any, ...args: string[]) => {
    const firstArg = args.shift()?.toString();
    const secondArg = args.shift()?.toString();
    if (firstArg === undefined || firstArg === null) {
        return object;
    }
    if (secondArg === undefined || secondArg === null) {
        object[firstArg] = value;
        return object;
    }
    if (isObjEmpty(object)) {
        object[firstArg] = { [secondArg]: {} };
    }

    return deepSet(value, object[firstArg], ...[secondArg, ...args]);
};

deepSet(1, myObject2, 'a', 'b');
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, 'a', 'c');
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, 'a');
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}
