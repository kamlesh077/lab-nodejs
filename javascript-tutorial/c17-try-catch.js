try {
    let x = undefined
    console.log(x[0]);
    console.log("ending try");
} catch (error) {
    console.log("error handling in catch",error)
} finally {
    console.log("finally always get executed");
}

console.log("End");