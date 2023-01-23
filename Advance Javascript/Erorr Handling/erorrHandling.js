const pobj1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let roll_no =[1,2,3,4,5]
       resolve(roll_no);
       reject('Error while communicating')
    },2000);

})

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

async function getData(){
 try{
    const rollnodata= await pobj1;
 console.log(rollnodata);
 const biodata = await getBiodata(rollnodata[1])
 console.log(biodata);
 }catch(error){
    console.log(`The Error : ${error}`);
 }
}

const getname = getData().then((myName)=>{
    console.log(myName);

})

getData()