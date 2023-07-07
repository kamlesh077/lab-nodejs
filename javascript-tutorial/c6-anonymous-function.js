let x = function () {
    console.log("hi");
}

x(); 

//immediate invoking function expression OR self invoking functions
(function exec() {    //named function expression 
    console.log("named");
})();


(function (x) {    //anonymous (without named) function expression
    console.log(x*x);
})(5);