
//  CLOSURE:-
// It is the combination  of a function and the lexical environment within which that function was declared. 
// CLOSURE is action that is inner function can have access to the outer function variable as all the global variables
// [The return statement does not execute the inner function - function statement return the entire body of the function.]

const outerFun =(a) =>{
   let b = 10;
   const innerFun = () =>{
    let sum = a+b;
    console.log(`the sum of two no. is ${sum}.`);
    }
   return innerFun()
}
outerFun(5)

// let inner =  outerFun(10)

// console.dir(inner);
// inner()

const interviewQuestion =(name) =>{
    return function(topic){
        if(name==="Chanchal"){
            console.log(`Hii, ${name}.Please explain what is ${topic}.`);
        }
        else if(name==="Nisha"){
            console.log(`Hii, ${name}.Please explain what is ${topic}.`);
        }
        else if(name==="Afreen"){
            console.log(`Hii, ${name}.Please explain what is ${topic}.`);
        }else{
            console.log('Welcome to ABC.');
        }
    }
}

const candidates = interviewQuestion("Chanchal")
candidates('UI')
const candidates1 = interviewQuestion("Nisha")
candidates1('AI')
const candidates2 = interviewQuestion("Afreen")
candidates2('Functions in JavaScript')
