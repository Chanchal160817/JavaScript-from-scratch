// Destructuring :-
// The Destructuring assignment syntex is a Javascript expression that makes it possible to unpack values from arrays,or properties from objects, into distinct variables.

const myProgramming = ['js','php','c','paython','java']

// ES5
var top1 = myProgramming[0]
var top2 = myProgramming[1]
var top3 = myProgramming[2]

console.log('My fav programming language is '+ top1);

// ES6:-Array destructuring
// let [p1,p2,p3,p4,p5] = myProgramming
myProgramming.forEach(function(currentValue){
    console.log(`My fav programming language is ${currentValue}`);
})

console.log(myProgramming.length);
// it i only want to print first and last index .
let [p1,,,p5]=myProgramming
console.log(`My fav programming language is ${p1} and my least fav is ${p5}`);

