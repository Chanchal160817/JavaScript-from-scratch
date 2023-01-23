// Rest Parameters:-
// Rest Parameters is an improved way to handle function parameter,allowing us to more easily handle various i/p as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function sum(a,b){
    console.log(a+b);
}
sum(1,2,3,4,5,6)
// 3 
// How to handle multiple arguments?
// ES6
function add(...args){
    console.log(args);
    let total = 0
    for(let i of args){
    total += i
    }
    console.log(total);
}

add(1,2,3,4,5,6)