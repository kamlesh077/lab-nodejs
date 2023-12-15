function createPromise() {
    return new Promise(function exec(resolve, reject) {
        // your code goes here 
        setTimeout(function f() {
            console.log("time up"); //#5
            resolve(10)
        },3000)
    })
}

// console.log("start");               //#1
// let x = createPromise()
// console.log("got a new promise");   //#2
// x.then(function f() {
//     console.log("promise done");    //#6
// })
// console.log("end");                 //#3

// for (let i = 0; i < 10000000000; i++) {
//     //some code here//#4
// }




// If the createpromise function is rejected then we can handle it by catch and finally methods
console.log("start");               //#1
let v = createPromise()
console.log("got a new promise");   //#2
v.then(function f(value) {
    console.log("promise done",value);    //#6  
}).catch(function g(value) {
    console.log("Handled by catch",value );
}).finally(function fn() {
    console.log("finally");
})
console.log("end");                 //#3

// for (let i = 0; i < 100000000000; i++) {
//    //some code here//#4
// }
