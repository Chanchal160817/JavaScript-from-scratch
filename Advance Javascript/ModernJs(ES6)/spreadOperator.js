// Spread Operators:-
// Spread Operators allows an iterable to expand in
//  places where 0+ arguments are expected . It is
//  mostly used in variable array where there is more than 1 values are expected.
//  It allows us the privilege to obtain a list of parameters from an array. 
// Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.

// Interview Question :-) How rest parameters and spread operator are different from each other?
// Spread operator replace apply(),concatenate(),
// ES5 

function sum (a,b,c){
    console.log(a+b+c);
}

// sum(1,2,3)

var arrVal = [1,2,3];
sum.apply(null,arrVal);

// ES6

function add(a,b,c){
    console.log(a+b+c);
}

var value = [1,2,4]
add(...value);

// replace concat()
// ES5
let arr1= [1,2,3]
let arr2=[4,5,6]
 arr1= arr1.concat(arr2)
 console.log(arr1);

//  ES6

arr1 = [...arr1,...arr2]
console.log(arr1);

// Replace copy()
let arrc1 = [1,2,3]
let arrc2 = arrc1
console.log(arrc2);

arrc2.push(4,5)
console.log(arrc2);
// shortcut:-
let arrc3 = [...arrc1,6,7]
console.log(arrc3);
// console.log(arrc1);
// Copy in array 1 also 
console.log(arrc1);