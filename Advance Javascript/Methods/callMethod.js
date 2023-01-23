// Call Method:-
// The call() method is a predefined JavaScript. With call() , an object can use a method belonging to another object.

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
    // feature:function(){
        
    // }
 }

 youtuber1.feature.call(youtuber2,6,"subscribe")

