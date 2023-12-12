let score = 4
function one() {
    let score = 0
    console.log(score);
}
function two() {
    let score = 3
    console.log(score);
}
function three() {
    console.log(score);
}

// one()
// two()
// three()
// console.log(score);

// lexical scoping 
// outer function can't access values of inner variables BUT inner can access to outerfunc
function outerFunc() {
    let outerVar = "I am at scope level 1"
    function innerFunc() {
        let innerVal = "I am at scope level 2"
        console.log(outerVar);
    }
    // console.log(innerVal); // cannot access to innerfunc
    innerFunc()    // calling inner function in outerfunc
}

outerFunc() // calling outer function

const myGlobalValue = 0
function func() {
    const val1 = 1
    console.log(myGlobalValue);

    function innerofFunc() {
        const val2 = 2
        console.log(val2, val1, myGlobalValue);

        function innerofInnerFunc() {
            const val3 = 3
            console.log(val3,val2, val1, myGlobalValue);
        }
        innerofInnerFunc()
    }
    innerofFunc()
} 

// func()


// Closure  - function can access to outer function is known as closure
function superFunc() {
    let outerValue = 'I am outer'
    function minorFunc() {
        console.log(outerValue);
    }
    minorFunc()
}

superFunc()

// example
const errorMessage = "File Not Found"

setTimeout(function callback(){
    console.log(errorMessage);
},1000)

let pagecount = 0

const items =[2,4,5,6,7,8]

items.forEach(function iterator(num){
    pagecount++
    console.log(num);
})
console.log("Page count", pagecount);