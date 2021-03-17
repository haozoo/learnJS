/* no need to use script tags inside javascript file */
/* alert('Hello World'); INEFFICIENT - blocks rest of program from executing, use console instead*/ 

console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

/* 
VARIABLES
var, let, const
var    <-  is globally scoped, it sucks 
let    <-  allows variable to be reassigned
const  <-  standard, more robust
*/

let age = 30;
console.log(age);

const score = 10;
console.log(score);



/* DATA TYPES */

/*
PRIMITIVES
- strings
- numbers
- boolean
- null
- undefined
- symbol
*/
const name = 'john';
const height = 30;
const rating = 4.5; // no float or decimal data-type
const isTree = true;
const x = null; // ~= empty 
const y = undefined; 
let z; // undefined

console.log(typeof name); // typeOf x would return object (incorrect - bogus)



/* STRINGS */
// STRING Concatenation
console.log('My name is ' + name + ' and I am ' + age); // old way

// Template String
const hello = `My name is ${name} and I am ${age}`; // better way - ` not '
console.log(hello);

// Methods & Attributes
const s = 'Hello World';
console.log(s.toUpperCase()); // methods have ()
console.log(s.length); // attributes don't
console.log(s.substring(0, 5).toUpperCase()); // can do multiple
console.log(s.split(''));
console.log(s.split(' '));



/* 
ARRAYS - variables that hold multiple values
*/
//Constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);