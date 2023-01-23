// Synchronous VS Asynchronous
// Synchronous(Syn JS):- A synchronous request blocks the client until operation completes i.e. browser is unresponsive. In such case,javascript engine of the browser is blocked.

// Aynchronous :-AJAX Web-Application Model
// An asynchronous request doesn't block the client i.e.browser is responsive.

// At that time, user can perform another operation also.

// In such case, JavaScript engine of the browser in not blocked.

// Synchronous Example:-
const func2=()=>{
     console.log('fun2 is starting');
}
const func1=() =>{
    console.log('fun1 is starting');
    func2()
    console.log('fun1 is ending');
}
func1()


// Asynchronous Example:-
const fun2=()=>{
    setTimeout(()=>{
     console.log('fun2 is starting');
    },3000)
}
const fun1=() =>{
    console.log('fun1 is starting');
    fun2()
    console.log('fun1 is ending');
}
fun1()
