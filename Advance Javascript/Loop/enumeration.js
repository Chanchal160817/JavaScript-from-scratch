// For in Loop

// For/in :- allow us to loops through the properties of an object

// for(var in object){
//     code block to be exeurted
// }

const bioData = {
    name:"Chanchal",
    age:22,
    degree: "B.tech"
}

for(property in bioData){
     console.log(property);
}

// when we deal with array then we are iterating
// when we deal with object then we are enumarating

// If we access the property of object that is because of enumarating.

// What enumerable means "countable"
// It simply means that the property will show up.
