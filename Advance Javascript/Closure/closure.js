//  function outer(){
//     var a = 10 ;
//     function inner(){
//     // in js this inner function has access to its outer environment.
//     console.log(a);
//     }
// this function along with its lexical environment called closure.

// return inner ;
//  }
//  outer()()
//  in line number 12 this parenthesis is for calling the inner function. 
//  if we write outside the function it still remember value of a . 
//  function outer(){

//     function inner(){
//     // in js this inner function has access to its outer environment.
//     console.log(a);
//     }
// // this function along with its lexical environment called closure.
// var a = 10 ;
// return inner ;
//  }
// //  it will still form a closure.

//  outer()()
// //  in line number 12 this parenthesis is for calling the inner function. 
// //  if we write outside the function it still remember value of a . 

// what if we change var into let is it make difference ?
//   outside the function it still remember value of a . 


// //  what if we place ectra paremeter in outer?
//  function outer(b){

//     function inner(){
//     // in js this inner function has access to its outer environment.
//     console.log(a,b);
//     }
// // this function along with its lexical environment called closure.
// let a = 10 ;
// // let "a" have a block scope their but still it behaves the same way .
// return inner ;
//  }
// //  it will still form a closure.

//  var close = outer("hello world"); 
//  close();
// //  in line number 12 this parenthesis is for calling the inner function. 
// //  if we write outside the function it still remember value of a .
// // this happen because  inner function became part of closure with outer environment.
// // b is also treated the same way in closure .

// // what if outer function nested inside a function so what will happen then ? so will inner have access to that function also ?
// //  Ans--> so if this outer function is like nested one more function so it will again form a closure to with that environment also .

// function outest(){
//     var c = 20 ;
//     function outer(b){

//         function inner(){
//         // in js this inner function has access to its outer environment.
//         console.log(a,b,c);
//         }
//     // this function along with its lexical environment called closure.
//     let a = 10 ;
//     // let "a" have a block scope their but still it behaves the same way .
//     return inner ;
//      }

//      return outer
// }

// // var close = outest()("hello world");
// // close()

// // why it print 10 , hello world , 20 ? what is this line no 74 doing ?
// // Ans-->when this outest is called it return the outer function . outer function called with parameter b hello world and it return to close . so we called close .

// // what if let a declare with conflicting name what will happen ?
// // Ans-->In this case inner function forms a closure with a . I mean this inner function have acces to a and a is like having a reference to "let a = 10" and this is a completlly new variable in global scope "let a = 100" .
// // so these two variable are completelly different a = 10 still form a closure with inner function  and it does not care for a=100 but if we dont have a =10 then it will defaulted to a = 100 .This is because inner function forms a closure with outer environment ,if it does'nt form in outer then it go more level deep in hierarchy .

// function outest() {
//     var c = 20;
//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         }
//         // let a = 10;
//         return inner;
//     }

//     return outer
// }
// let a = 100;
// var close = outest()("hello world");
// close()

// // closure is very useful and it is the most important part of the js  
// //  ADVANTAGE OF CLOSOUR 
// // 1 . Module Pattern 
// // 2 . Function Currying
// // 3 . High order function like memories(),once()
// // 4 . It help in data hiding and encapsulation 

// Data Hiding :- we have a variable and we want to have some data privacy so that other function or other pieces of code can't have access to that perticular data it is data hiding and data privacy . 
// we can encapsulate the data  so that  like other part of program can't access it . 

// function counter(){
//     var count = 0 ;
//     return  function incrementCount(){
//         count++ ;
//         console.log(count);
//     }
// }
// // console.log(count);
// var counter1 = counter()
// counter1();
// counter1();

// var counter2 = counter()
// // it will again create a counter with a new closure . it create a new counter itself .
// counter2()
// counter2()
// counter2()
// counter2()

// // is it a good way of making  counter . is the above code is scalable in a seance of suppose if we want  to create a decrement counter ?
// // yes it is not a good way if we want to decrement also . For that may be we can use a constructor function . and we can have saperate function for increment & decrement .

// function counter(){
//     var count = 0 ;
//     this.incrementCount =  function (){
//         count++ ;
//         console.log(count);
//     }
//     this.decrementCount =  function (){
//         count-- ;
//         console.log(count);
//     }
// }

// var counter1 = new counter()
// counter1.incrementCount()
// counter1.incrementCount()
// counter1.decrementCount()
// // Above code is like a constructor function . 
// // this is a constructor function so we have to use new function here .
// // we can create a closure with constructor also .

// // Disadvantages of Closure
// // 1. There will be over consumption of memory in closure because every time a closure is form so it consume a lot of memory .
// // and sometime those closed variable are not garbage collector so that means that accumulating a lot of memory if we create a lot of program . So because those variable are not garbage collector till the program end .
// // 2. If we are not handel closure properly then it will lead to memory leaks because memory is accumulated over time .It can also freez the browser if we not handel properly .

// // What is a Garbage collector ? what does it do ?
// // Ans--> Garbage collector is like a program in the browser or the javascript program which freez untilized memory . 

// // How is closure and garbage collector related to each other?
// // Ans--> 

function a(){
    var x = 0 , z= 10;
   return function b(){
        console.log(x);
    }
}

var y = a()

y()

// smartlly collected garbage collecter :- 
