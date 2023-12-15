// function h(x,fn) {
//     // h-> is a hof
//     // fn -> callback

//     console.log(x*x);
//     fn()
// }

// h(10, function () {
//     console.log("Done with callback");
// })

// function h(x,fn) {
//     // h-> is a hof
//     // fn -> callback

//     console.log(x*x);
//     fn(x*x)
// }

// h(10,exec)

//     function exec(n) {
//         console.log("Square value is: ", n);
//     }


// console.log("----------------------");
// console.log("start");
// setTimeout(function f() {
//     console.log("timer Up");
// },3000);

// console.log("end");

// for (let i = 0; i < 1000000000; i++) {}


// Node.js is a javascript run time environment it means that , previously all those capabilities provided by browser is now provided by node js in terminal only 


// Event loop is always checking that call stack is empty or not if it is empty then only micro task will execute
// console.log("---------------------- It prints according to , which of the callback function is taking less time.Means here  in these timer 2 has less sec than timer 1 t2<t1 ");
// console.log("start");
// setTimeout(function f() {
//     console.log("timer 1");
// },1000);
// setTimeout(function f() {
//     console.log("timer 2");
// },100);

// console.log("end");






// setTimeout(function f() {
//     console.log("timer 1");
//     setTimeout(function f() {
//         console.log("timer 2");
//         setTimeout(function f() {
//             console.log("timer 3")},100)
//         },1000)
// },5000);