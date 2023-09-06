export const values = <T>(obj: Object): T[] => {
    if (!obj) return [];
    return Object.values(obj);
};

// Ejemplo:
console.log(
    values({ id: 31, duration: 310, name: 'long video', format: 'mp4' })
); // [31, 310, "long video", "mp4"]

/**
 *
 *
 *
 *
 *
 *
 */

// Ejemplo:
function Person(name) {
    this.name = name;
}

Person.prototype.walk = function () {
    console.log("I'm walking");
};

var john = new Person('John');
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
