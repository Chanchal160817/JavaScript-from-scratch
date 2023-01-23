// Math Object in ES6

// sign()
// trunc()

// sign()
let number = 5.55;
console.log(Math.sign(number));
// +ve no. = 1
let num = -5.55;
console.log(Math.sign(num));
// -ve no. = -1

let n = 0;
console.log(Math.sign(n));

let a = NaN
console.log(a);

// trunc()
// Remove number come after decimal points
let b = 5.692
console.log(Math.trunc(b));

let c = -5.692
console.log(Math.trunc(c));
console.log(Math.floor(c));
console.log(Math.ceil(c));
