// IIFE stand for Immediately Invoked Function Expression
//  An IIFE is a JS Function that run as soon as it is defined
// It is a design which is also Known as a self-Executing Anonymous Function and Containsn two major Parts.

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

// The second part creates the immediately invoked function expression() through which the JS engine will directly interpret the function .

// Use to Prevent function   and make independent to function .
// Page get automatically refres

// function authorName(){
//     console.log('Author Name is Vinode  ');
// }

// authorName()
// Method 1
(function(){
    var a = "Anaya"
    console.log('Author name is  '+a);
})()

console.log(a);
// ERORR:- a is not defined 
// but a is declare by var then also error is thrown due to grouping operator it maintain privacy. it will be in their lexical scope.

// Method 2 :-
(function(a){
    // var a = "Anaya"
    console.log('Author name is  '+a);
})("Anaya")