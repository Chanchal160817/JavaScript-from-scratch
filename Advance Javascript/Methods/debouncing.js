// Debouncing in Javascript 
let counter = 0;
const getData = () => {
    // calls an API and gets Data 
    console.log("Fetching Data ..", counter++)

}
const doSomeMagic = function (fn, d) {
    return function () {
        let context = this.
            args = arguments
        let timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, d)
    }
}

const betterFunction = doSomeMagic(getData, 300)