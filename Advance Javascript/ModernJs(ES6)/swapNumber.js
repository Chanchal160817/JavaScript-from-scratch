// WAP to Swap Two Number without Third variable.

let a = 5;
let b= 10;
// with third variable
let temp = a;
a=b
b=temp
console.log(`a is ${a}.
b is ${b}. `);

// without third variable
let c = 15;
let d = 20;
[c,d] = [d,c]
// Using destructuring
console.log(`c is ${c}.
d is ${d}. `);
