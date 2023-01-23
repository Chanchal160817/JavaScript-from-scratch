// Apply() Method 

// The apply() is similar to the call() method.
// The call() method takes arguments separetely.
// The apply() method takes arguments as a array.

const youtuber1 = {
    name: "cuteHarshu",
    content: "Gaming",
    feature: function(rating , support){
        console.log(`very friendly way of teaching . ${this.name} is my Favoutit Gaming Channel.I will love to give ${rating} star.Please ${support} ${this.name} channel.`);
    }
 }

 youtuber1.feature(5,"subscribe")

 const youtuber2 = {
    name:"Code with harry",
    content:"programming",
 }

 youtuber1.feature.apply(youtuber2,[6,"subscribe"])
 
//  youtuber1.feature.call(youtuber2,6,"subscribe")
let max = Math.max(1,2,3);
console.log(max);
// Find max in apply() method 
let maximumApply = Math.max.apply(null,[1,2,3,5,9])
console.log(maximumApply);