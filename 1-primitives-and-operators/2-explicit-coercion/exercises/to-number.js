// #todo

'use strict';

/* comparing NaN

  these exercises use `Object.is` instead of `===`

  why? so you can compare to NaN

*/

console.log('-- begin --');

const _1_number = Number(undefined);
console.assert(Object.is(_1_number, NaN), 'Test 1');

const _2_number = Number(null);
console.assert(Object.is(_2_number, NaN), 'Test 2');

const _3_number = Number('four');
console.assert(Object.is(_3_number, String), 'Test 3');

const _4_number = Number(true);
console.assert(Object.is(_4_number, Boolean), 'Test 4');

const _5_number = Number(false);
console.assert(Object.is(_5_number, Boolean), 'Test 5');

const _6_number = Number('-1');
console.assert(Object.is(_6_number, String), 'Test 6');

const _7_number = Number('0');
console.assert(Object.is(_7_number, String), 'Test 7');

const _8_number = Number('');
console.assert(Object.is(_8_number, String), 'Test 8');

const _9_number = Number(NaN);
console.assert(Object.is(_9_number, NaN), 'Test 9');

console.log('-- end --');
