var animals = [
    {name: 'Fluffykins', species:'rabbit'},
    {name: 'Care', species:'dog'},
    {name: 'Hamilton', species:'dog'},
    {name: 'Harold', species:'fish'},
    {name: 'Ursula', species:'cat'},
    {name: 'Jimmy', species:'fish'}
]

// var dogs=[]

// for(var i=0;i<animal.length;i++){
//     if(animal[i].species==='dog'){
//         dogs.push(animal[i])
//     }
// }
var isDog = function(animal){
    return animal.species === 'fish'

}
var dogs = animals.filter(isDog)

console.log(dogs)


