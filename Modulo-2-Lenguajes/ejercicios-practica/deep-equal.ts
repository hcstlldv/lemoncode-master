var user = { name: 'María', age: 30 };
var clonedUser = { name: 'María', age: 30 };

console.log(user === clonedUser); // false

var user2 = {
    name: 'María',
    age: 30,
    address: { city: 'Málaga', code: 29620 },
    friends: ['Juan'],
};
var clonedUser2 = {
    name: 'María',
    age: 30,
    address: { city: 'Málaga', code: 29620 },
    friends: ['Juan'],
};

const keysLength = (obj: Object): number => {
    return Object.keys(obj).length;
};

function isEqual(objectA: Object, objectB: Object): boolean {
    if (keysLength(objectA) !== keysLength(objectB)) return false;

    for (const property in objectA) {
        if (objectA.hasOwnProperty(property)) {
            if (!objectB.hasOwnProperty(property)) return false;

            const valueA = objectA[property];
            const valueB = objectB[property];
            if (typeof valueA === 'object' && typeof valueB === 'object') {
                if (!isEqual(valueA, valueB)) return false;
            } else {
                if (valueA !== valueB) return false;
            }
        }
    }
    return true;
}

console.log(isEqual(user, clonedUser)); // true
console.log(isEqual(user2, clonedUser2)); // true
