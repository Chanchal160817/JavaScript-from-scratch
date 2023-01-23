// Higher order are functions as arguments or return function as their result.

const interviewQuestion =(name) =>{
    if(name ==="Chanchal"){
        return function(topic){
            console.log(`Hii ${name}.What is ${topic}?.Please explain us.`);
        }
    }
    if(name ==="Nisha"){
        return function(topic){
            console.log(`Hii ${name}.What is ${topic}?.Please explain us.`);
        }
    }
    if(name ==="Afreen"){
        return function(topic){
            console.log(`Hii ${name}.What is ${topic}?.Please explain us.`);
        }
    }else{
        return function(){
            console.log('Wellcome to interview');
        }
    }
}

interviewQuestion("a")("UI")

