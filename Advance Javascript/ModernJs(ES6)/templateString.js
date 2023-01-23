// Template Literals (Template Strings)

// ES5
console.log("My name is chanchal. " + "My age is 22");

let firstName = "chanchal"
let lastName = "Verma"
console.log('My name is ' + firstName + '. My last name is ' + lastName + '.');

let a = 20;
let b = 30 ;
console.log('Fifty is ' + (a+b) + ' and \nnot ' + (2*a+b) + '.');

// ES6

console.log(`My name is chanchal.My age is 22`);

console.log(`My name is ${firstName}.My last name is ${lastName}.`);

console.log(`Fifty is ${a+b} and 
not ${2*a+b}. `);


// Template String Methods

// ES6 strings Methods :-

console.log(`${firstName}`.startsWith('c'));
// .startsWith():-return Boolean value
// check starting value
// Case sensitive 
// Use in validations
console.log(`${firstName}`.endsWith('l'));
// Check end value
console.log(`${firstName}`.includes('chanchal'));

console.log(`${firstName}`.repeat(5));
// For space
console.log(`${firstName} `.repeat(5));

