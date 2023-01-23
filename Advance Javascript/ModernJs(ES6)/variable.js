// Variable  

// Variable introduce in ES6 are:-

// 1.Let 
// 2.Const

// Variables declared with "var" in JavaScript are FUNCTION SCOPED.
// Variables declared with "let & const" are BLOCK SCOPED.

var name = "chanchal";
name = "anisha"
console.log(name);

let nam = "Meerab";
nam = "chanchal"
console.log(nam);

const PI = "Anaya";
// PI = "murtasit" :-)type error :- Assignment to cinstant variable.
console.log(PI);


function modernJS(love){
    if(love){
        var name = "Chanchal"
        var title ="Verma"
        // console.log('my name is ' + name + " " + title);
    }
    // console.log('my name is ' + name + " " + title);
}
modernJS(true)

// BLOCK SCOPE
function modernJS(love){
    if(love){
        let name = "Chanchal"
        const title ="Verma"
        console.log('my name is ' + name + " " + title);
    }
    // console.log('my name is ' + name + " " + title);
}
modernJS(true)

var whoWillWinToday = "India";
if(true){
    var whoWillWinToday ="NewZealand";
    console.log(whoWillWinToday);
}

console.log(whoWillWinToday);

// Block scope of let
let winner = "India";
if(true){
    let winner = "New Zealand";
    console.log(winner);
}

console.log(winner);

// Block scope of Const 

let win = "India";
if(true){
    let win = "New Zealand";
    console.log(win);
}

console.log(win);