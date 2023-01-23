// POLYFILL 
 
// Pollyfill is a sort of browser callback so what if your browser does'nt have a bind function and you have to write your own bind function that is what we are going yo do .

let name ={
    firstName:'Chanchal',
    lastName:"Verma"
}

let printName = function(hometowm,state,country){
    console.log(this.firstName+" "+ this.lastName + " ," + hometowm +","+state + ","+country);
}

let printMyName = printName.bind(name , "Jagdalpur")
printMyName("Chhattisgadh" , "India");

// Our task is to write our own bind function.

Function.prototype.mybind= function(...args){
    // this-> printname
    let obj= this 
    params = args.slice(1)
    return function(...args2){
        // argument array is inside args and args is a array of argument path .
        obj.call(args[0])
        obj.apply(args[0],[...params, ...args2])

        // prblem not solve whatif we want to print state .
        // printname()

        // when we extracted args[0] it was a reference of a name object we want the other object argument is also be passed inside this obj call so we can just extract the params  
    }
}
// Prototype:- If we keep any method to function.prototype then each and every method what we write has access to those methods
let printMyName2 = printName.mybind(name ,"Jagdalpur")
printMyName2("Chhattisgadh" ,"India");