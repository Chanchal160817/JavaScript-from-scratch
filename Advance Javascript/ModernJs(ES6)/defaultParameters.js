// Default Parameter
// Default Function Parameter allow named parameters to be initialized with default value or undefined is passed .

// multiply of 2 number 

// ES5

function mult(a,b){
    console.log(b);
    // undefined 
    // 4*undefined = NAN
    // we can tacle NAN by using validation for b but what if we have multiple parameter for that we have default paremeter.
    b=(typeof b!== 'undefined')? b:1
    console.log(a*b);
}
mult(4)
// NAN
mult(2,3)
// 6

function multipy(a,b=2){
    console.log(a*b);
}

multipy(4)

// ES6

const multiply =(a,b)=>{
    console.log(`The multiplication of two number is ${a*b}`);
}

multiply(3,5)