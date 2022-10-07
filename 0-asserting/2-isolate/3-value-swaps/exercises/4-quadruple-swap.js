// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp;

// --- swap values ---
temp = b
console.assert(temp === 'z');
console.assert(b === 'z')

b = d
console.assert(b === 'x');
console.assert(d === 'x');

d = temp
console.assert(d === 'z');
console.assert(temp === 'z');

temp = a 
console.assert(temp === 'y');
console.assert(a === 'y');

a = c
console.assert(a === 'w');
console.assert(c === 'w');

c = temp
console.assert(c === 'y');
console.assert(temp === 'y');



// --- test final values ---

const test1 = a === 'w';
console.assert(test1, 'Test 1');

const test2 = b === 'x';
console.assert(test2, 'Test 2');

const test3 = c === 'y';
console.assert(test3, 'Test 3');

const test4 = d === 'z';
console.assert(test4, 'Test 4');

const test5 = temp === 'y';
console.assert(test5, 'Test 5');

console.log('-- end --');
