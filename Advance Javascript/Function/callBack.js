setTimeout(function(){
    console.log("timer");
},5000)

function x(y){
    console.log("x");
    y()
}

x(function y(){
    console.log("y");
})

// Any function that is passed as an argument is called a callback function.

// A callback is a function that is to be executed afer another function has finished executing - hence the name 'call back'
const funA=()=>{
    setTimeout(function(){
     console.log('welcome FunA');
     funB()
    },3000)
}
const funB=()=>{
    console.log('wellcome funB');
}

funA()

//  JS is an event driven language . This means that instead of waiting for a response before moving on ,JavaScript will keep executing while listening for other events. This

// Callbacks are a way to make sure certain code doesn't executed until other code has already finished execution.

const perOne = (friend,callfrnd) =>{
    console.log(`I am busy right Now. I am talking to ${friend}. I will call you back. `);
   callfrnd()
}

const perTwo =() =>{
    console.log(`Hey what's up. I call back you dekha.`);

}

perOne("Nisha",perTwo)
