// Higher Order function (HOF)

const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo,n) {
    return powerTwo(n) * n
}

// console.log(powerCube(powerTwo,2));

function sayHello() {
    return () => {
        console.log("Hello Kamlesh");
    }
}

let guessValue = sayHello()
// console.log(guessValue);       //[Function (anonymous)]

// guessValue();


const higherOrder = m => {
    const oneFun = n => {
        const twoFun = o => {
            return m + n + o
        }
        return twoFun
    }
    return oneFun
} 

console.log(higherOrder(3)(3)(1));


const myNums = [2,3,4,5]

const sumArray = arr => {
    let total = 0
    arr.forEach(element => {
        total += element
    });
    return total
}

// console.log(sumArray(myNums));


function oneMoreHello() {
    console.log("Hello Kamlesh !!", Math.random());
}

setInterval(oneMoreHello,1000)

// setTimeout(oneMoreHello, 2000)


