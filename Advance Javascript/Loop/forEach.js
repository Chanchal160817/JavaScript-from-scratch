// forEach() method

// The forEach() method calls a function once for each element in an array , in order.
// Syntex : arr.forEach(callback(currentValue[,index[,array]])[,thisArg])
// currentValue : Required . The value of the current element.
// index : Optional. The array index of the current element.
// array : Optional. The array object of the current element belongs to.

const myFavProg = ['Java','Javascript','php','c']

// console.log(myFavProg[0]);
// console.log(myFavProg[1]);
// console.log(myFavProg[2]);

// for(let x=0 ; x<myFavProg.length ;x++){
//     console.log(myFavProg[x]);
// }

myFavProg.forEach(function(currentValue,index){
    console.log(index+" -- "+currentValue);
})

// create one array . for each element in the array : Add the value 100 to each items and update the element value.

const newArr = [10,20,30,40,50];
newArr.forEach(function(currentValue){
    currentValue+=100
    console.log(currentValue);
})