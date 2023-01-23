// Arrow function:-Also known as "Fat arrow functions" .They are undoubtedly one of the more popular features of ES6. they introduced a new way of writing concise functions.

// ES5
var sum = function(){
    var a = 5;
    var b=10;
    return a + b;
}
// sum()
console.log(sum());

// ES6

const sum1 = ()=>{
    let a = 5;
    let b= 10;
    return a + b;
}
console.log(sum1());

// Simplify way or one line of code

const sum2 =(a,b)=> a+b
console.log(sum2(10,30));