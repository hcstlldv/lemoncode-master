/**
 * 1
 */
const x = NaN;

console.log(x === x); // false

/**
 * 2
 */
const isNaNValue = (v) => Number.isNaN(v);

console.log(isNaNValue(NaN)); // true

/**
 * 3
 */
const isNaNValue2 = (v) => 1;
console.log(!isNaNValue2(x) && x !== x); // false

/**
 * 4
 * No hay valor posible para x
 */

/**
 * 5
 * No hay valor posible para x
 */
