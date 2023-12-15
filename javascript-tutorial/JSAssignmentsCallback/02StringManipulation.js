// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.

function manipulateString(InpString, callback) {
    const StrToUpperCase = InpString.toUpperCase()   //3
    callback(StrToUpperCase)                         //4
}

function logstring(StrToUpperCase){
    console.log("The manipulated string is : " , StrToUpperCase); //5 print the uppercase String
}

let str = "helloworld"             //1

manipulateString(str,logstring)    //2