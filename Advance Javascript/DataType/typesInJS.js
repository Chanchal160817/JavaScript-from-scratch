// In jS Everything is an object .

// TYPES IN JAVASCRIPT [Data Types]


// a . Primative datatype :- It has value 
// 1.Numer
// 2.String
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Symbol

// Non-primitive datatype:- Also known as reference datatype .It does'nt have value .It has reference of data.
// Object i.e array,function,Date 

// In JS Everything is a Object 

let a = 1
let b = "chanchal"
let c = true
let d ;
// due to hosting it assign undefined . 
let e = ""

// string 
let f = null;
// object 
console.log(typeof(f)); 

const youtube = {
    name:"harshCuteGamer",
    subscribers: 200
}
youtube.prof = "backend developer"

console.log(youtube);

console.log(typeof(([])));
console.log(typeof(function(){})); 

// Function is also object

const check =()=>{
    console.log('checking');
}

check.letshavefun = "allright I am an Object too"

console.log(check.letshavefun);
console.log(null== false)