// Pass By Value 

let a = 5
let b = a
b = b+5 


// both are independent values
 console.log(a);
 console.log(b);

//  Pass By Reference

const obj1 = {
    user : "chanchal",
    pass:"password"
}

const obj2 = obj1
obj2.pass = "abc"
console.log(obj1);
console.log(obj2);

// array 
const arr1 = [1,2,3,4]
const arr3 = arr1
arr3.push(6)

// use concat() method to change in one array only
const arr2 = [].concat(arr1)

arr2.push(5)
console.log(arr1);
console.log(arr2);
console.log(arr3);