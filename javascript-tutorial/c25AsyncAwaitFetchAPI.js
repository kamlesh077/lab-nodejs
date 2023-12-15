function createPromise() {
    return new Promise(function exec(resolve, reject) {
        // your code goes here 
        setTimeout(function f() {
            console.log("time up"); //#5
            resolve(10)
            // reject(10)
        },3000)
    })
}

async function consume() {
    try {
        console.log("inside function");
    const response = await createPromise()
    const response2 = await createPromise() 
    console.log("response is", response);
    } catch (err) {
        console.log("Handled", err);
    }
}

console.log("start");
consume()
console.log("end");


 fetch("https://www.boredapi.com/api/activity")
.then(function f(response){
    return response.json()
}).then(function f(value)
        {console.log(value)
    })

    // console.log(c);