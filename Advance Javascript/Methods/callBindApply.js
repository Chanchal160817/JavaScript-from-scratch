// CALL 

let name = {
    firstName:"Chanchal",
    lastName:"Verma",
    // printFullName: function(){
    //     console.log(this.firstName+ " "+ this.lastName)
    // }
}

// name.printFullName()

let name2 ={
    firstName:"Anisha",
    lastName:"Verma",
    //  printFullName : function(){
    //     console.log(this.firstName+ " "+ this.lastName)
    //     // but that is not a good way to call function again and again So , thats where call comes into picture .
    // }
// name2.printFullName()

}

let printFullName = function(hometowm,contry ){
        console.log(this.firstName+ " "+ this.lastName+ " from " + hometowm+ " , "+ contry)
        // However in general case we dont keep our object inside the object if we want to reuse them .
    }
//Instead of passing "name"  we can use printFullName by passing name as a reference in call . 

printFullName.call(name,"Jagdalpur","India")
printFullName.call(name2,"London","USA")

// function borrowing :- We can borrow function from other objects and use it with the data of some other object .
// Example:-

// name.printFullName.call(name2);

// It is quite useful we can borrow function from other functions/Methods .

//2. APPLY METHOD

// The only differenc b/w call() and apply() method is the way we pass the arguments . Insted of passing arguments .
// instead of call we use apply 
// firstt argument :- reference to this Variable
// second argument :- list to the argument what we pass in the function 
// In Apply() , we pass second argument as array list.
// Insted of Passing argument individually in the call() we call this argument in a array list .

printFullName.apply(name2,["Mumbai" , "Maharashtra"])


// 3. BIND 

// Bind() exactly same as call() the only difference is insted of directly calling this method 

let printMyName = printFullName.bind(name2,"mumbai", "mp")
console.log(printMyName)
printMyName()

// Bind() is use to bind and keep a copy of that method and use later
// the only difference the call() and bind() is  it give you the copy but which can we invoke later.

// Does'nt directly invoke the method but give you the copy of that exactly same method which can be invoke later.
