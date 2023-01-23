// Promises :-
// Promises are used to handle asynchronous operation in javascript. They are easy to manage when dealing with multiple asynchronous operation where callbacks can create callback hell leading to unmanageable code.

// A promise is a object that keeps track of about whether a certain event has happened already or not.

// Stage :-
// 1.pending
// 2.resolve/ fullfilled
// 3.reject


// API
// query :- 
// 1. Fetch student roll no after 2 sec
// 2. When roll no found pick one roll no after 2s.
// 3. Roll no pic then find student name ,age , gender.

// Promise Constructor:-
// exexutor function :- This function comtain two paremeter i.e.resolve and reject. A function to be executed by the constructor, during the process of constructing the promise object.
// The executor is custom code that ties an outcome to a promise. You, the programmer, write the executor.
const pobj1 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let roll_no =[1,2,3,4,5]
        resolve(roll_no);
        reject('Error while communicating')
     },2000);

})
// Promise as object 
const getBiodata = (indexdata) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout((indexdata)=>{
          let biodata = {
            name:'chanchal',
            age:22
          }
          resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} year old. `)
        },2000,indexdata)
    })
}  
pobj1.then((rollno)=>{
   console.log(rollno);
   return getBiodata(rollno[1])
}).then((kuchbhi)=>{
    console.log(kuchbhi);
   }).catch((error)=>{
    console.log(error);
})

// with the help of promise we create methods are promise.then(),promise.catch(),and promise.finally() are used to associate further action with a promise that becomes that becomes settled.


