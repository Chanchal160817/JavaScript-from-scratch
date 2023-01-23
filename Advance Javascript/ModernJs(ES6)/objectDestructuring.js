// Object Destructuring :-
// ES5
 const bioData ={
    name:"Chanchal",
    age:22,
    deg: "Btech",
    hobby:{
        first:'playing',
        sec:'youtube video'
    }
 }

 console.log('My name is ' + bioData.name);

//  ES6

let {name,age,deg,hobby} =    bioData
// we can rename them as {name:myname}
console.log(`My name is ${name}.My age is ${age}.My highest qualification is ${deg}.I love making ${hobby.sec} `);

