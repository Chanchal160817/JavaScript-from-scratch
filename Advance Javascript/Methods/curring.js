// CURRYNING BY BIND 
// let multipy = function(x,y){
//     console.log(x*y)
// }
// let multipye = function(y){
//     let x = 2
//     console.log(x*y)
// }

// let multipyByTwo = multipy.bind(this, 2)
// bind give copy of multiply and does not invoke it directly
//  multipyByTwo(5)

//  argument we pass inside multiplyByTwo refer to y 

// Currying Using function closure 

let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyByTwo = multiply(2)
multiplyByTwo(3)

