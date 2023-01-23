// a()
// // b()
// function a(){
//     console.log("a called");
// }


// var b = function b (){
//     console.log("b called");
// } 
// b()

// var b = function xyz(){
//     console.log("b called");
// } 
// // xyz() 
// // 1st way
// // var b = function(param1 ){
// //     console.log(param1);
// // }

// // b(function(){

// // })

// // 2nd way
// // var b = function(param1 ){
// //     console.log(param1);
// // }
// // function xyz(){

// // }
// // b(xyz)

// // 3rd way
const b = function(param1 ){
   return function xyz(){


   }
}
console.log(b());

// 1. In  Javascript we can assign a function to a variable .
// Also as a method 
// Assign a method in Javascript is super easy as well . Similar to how we can assign a function to a variable we can assign a function as a value to a key in an object.

// Function in Variable
// const thankYou = function(){
//    console.log("Thank You so much for your love and support");
// }

// thankYou()

// Function in object. 
const youtube = {
   name :"Chanchal",
   qualification : function(){
      console.log('I did B.tech in computer science');
   }
}

youtube.qualification()

// Pass a function as a Argument.
// Since function are first class citizens in Javascript , we are able to pass them.

const myName =() =>{
   return "Hello"
}

const greeting =(sayHi,name) =>{
   console.log(sayHi()+ " " + name);
}

greeting(myName,"Chanchal")

// this explain how we are teating the function as a Value.
// the function that we pass as a argument to another function,
// is called a Callback function . myName is a callback function.


function a(){
   return function b(){
      console.log('Thank You so much for your love and support.');
   }
}
// Method 1
a()()

// Method 2
const c = a()
c()




