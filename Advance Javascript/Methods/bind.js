// bind() Method
// By this method,we can bind an object to a common function , so that the function given different result when its need.

const youtuber = {
    name:"Code with Chanchal",
    content: "Programming ",
    feature: function(){
        console.log(`My fav youtuber name is ${this.name}.He made videos on ${this.content} topics.`);
    }
}

youtuber.feature()

// we get undefined when we use as variable 
let youtuberFun = youtuber.feature
youtuberFun()

// after using bind we get result as variable 
let youtuberFun2 = youtuber.feature.bind(youtuber)
youtuberFun2()
// the bind() method takes an object as an first argument and creates a new function.

const youtuber1 = {
    name:"Code with Chanchal",
    content: "Programming ",
    
}
const youtuber2 = {
    name:"Code with Harshu",
    content: "Programming ",
    
}
const youtuber3 = {
    name:"Code with Nisha",
    content: "Programming ",
    
}

function feature(rating){
    console.log(`My fav youtuber name is ${this.name}.He made videos on ${this.content} topics.I will love to give ${rating} star.`);
}

let a=feature.bind(youtuber1)
a(10)
let b=feature.bind(youtuber2)
b(10)
let c=feature.bind(youtuber3)
c(8)