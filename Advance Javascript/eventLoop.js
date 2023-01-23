// How Asynchronous work 
// Using Event Loop.

// Global Execution Context(GEC):- 
// This is the default execution context in which JS code start its execution when the file first loads in the browser.
// An execution context is an abstract concept of an environment where the Javascript code is evaluated and executed.


const fun2=()=>{
    setTimeout(()=>{
     console.log('fun2 is starting');
    },3000)
}
const fun1=() =>{
    console.log('fun1 is starting');
    fun2()
    console.log('fun1 is ending');
}
fun1()
