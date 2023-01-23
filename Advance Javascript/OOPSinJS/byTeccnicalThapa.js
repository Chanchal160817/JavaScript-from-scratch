// An Object is an instance of a class .
// Since Object can be enhanced , there are many ways to create objects sharing methods and properties. But we want the simplest one.
// ES6 Provides the keyword class , making it very easy to create a "CLASS".

// INHERITANCE :-Drived class 

// A class  is a type of function,but instead of using the keyword function to initiate it , we use the keyword class , and the properties are assigned inside a constructor() method.
// A class is a user defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type.

function student() {

}

class Students {
    constructor(name,age,cls) {
    this.myname = name;
    this.myage = age;
    this.mycls = cls;
}
// Instance method 
// If we use static keyword then inherited classes unable to access instance methods
biodata(){
    console.log(`Hii My name is ${this.myname}.My age is ${this.myage} and I am in class ${this.mycls}.`);
}
}
// For inherence 
class Players extends Students {
      constructor(name,age,cls,game){
        super(name,age,cls)
        this.mygame=game 
      }
    //   biodata(){
    //     console.log(`Hii My name is ${this.myname}.My age is ${this.myage} and I am in class ${this.mycls}.I am the player of this ${this.mygame}`);
    // }
    play_biodata(){
        console.log(`${super.biodata()}. I am player of ${this.game}`);
    }
}

let obj1 = new Students('Chanchal',22,"B.tech");
let obj2 = new Students('Nisha',21,"M.tech");
let obj3 = new Players('Nisha',21,"M.tech","BasketBall");
obj1.biodata()
obj2.biodata()
obj3.biodata()