let obj = {
    x: 10,
    // without arrow function this keyword can be used 
    fun() {
        console.log(this.x);
    }
} 
obj.fun()


let obj2 = {
    x: 20,
    // with arrow function this keyword theory is not applicable, x is not accessible
    fun: () => {
        console.log(this.x);
    }
}
obj2.fun()


let obj3 = {
    x:30,
    fun() {
        y ={
            gun: () => {
                console.log(this.x);
            }
        }
        y.gun();
    }
}

obj3.fun();