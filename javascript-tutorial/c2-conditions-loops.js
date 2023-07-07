// Variables and Values (Number, String, Boolean,etc )
// Operators


// Conditions And Loops

// let age = 17

// if (age >= 18) {
//     console.log("You are allowed");
// } else {
// console.log("You are not allowed");
// }


// let signal = "Green";
// if(signal== "red"){
//     console.log("Red => STOP");
// }  //condition 1
// else if (signal == "yellow") {
//     console.log("yellow => Go Slow");
// } //con 2
// else if (signal == "Green") {
//     console.log("Green => Go Fast");
// } //con 3
//  else {
//     console.log("Inavalid input");
// } // invalid/last


// Switch case
// let user = "Mentor";
// switch(user) {

//     case "Admin":
//         console.log("He is Admin");
//         break;

//     case "Student":
//         console.log("He is Student");
//         break;

//     case "Mentor":
//         console.log("He is Mentor");
//         break;
    
//     default:
//         console.log("I am Default");
// }


// Loops
// do while , while , for

// for(let i = 0; i < 5; (Here after checking condition value is printed then incremented) i++)
// for (initialize ; condition check ; (print) increment)

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// while (init, condition, inc/dec)
// let i = 0;
// while (i<5) {
//     console.log(i);
//     i++;
// }

// let i = 0
// do {
//     console.log(i);
//     i++;
// } while (i<5);


// Ternary opperator/ ternary condition
// condition ? TRUE:FALSE

// let isloggedin = false
// isloggedin ? console.log("HOME PAGE") : console.log("LogInPage");






// -------------practice---------------------*/

// for (let i = 0; i < 5; i++) {
//     if(i === 3) continue; //3 is skipped
//     console.log(i);
// }

// console.log(3/0);


// const name = "PW Skills"
// console.log(!typeof name === "object");
// console.log(!typeof name === "string");


var a = [1,2,3,4,5]
for (var i in a ) {
    if (a[i]%2 === 0) {
        console.log(a[i]); 
    }
}