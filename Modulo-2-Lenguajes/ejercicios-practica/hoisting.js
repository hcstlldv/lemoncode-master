/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * A
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function f() {
    var a;
    function g() {
        return a;
    }

    console.log(a); // undefined
    console.log(g()); // undefined
    a = 'good job!';
    console.log(a); // good job!
}

f();
/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * B
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

var a;
(function () {
    var a;
    var c;
    console.log(a); // undefined
    a = 2;
    b = 4; // equivalent to window.b = 4
    c = 3;
})();

a = 1;

console.log(a); // 1
console.log(b); // 4
console.log(c); // reference error. c only accessible inside IIFE

/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * C
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

var a;
function f() {
    var c;
    console.log(a); // undefined
    b = 4;
    c = 3;
}

a = 1;
f();

console.log(a); // 1
console.log(b); // 4
console.log(c); // reference error
