function su(a){
    if(arguments.length === 2){
        return arguments[0] + arguments[1]
    }else{
        return function (y) {
            return a + y
        }
    }
}

console.log(su(1)(2))
console.log(su(1,2))

//Here you can  use arguments keyword to know that how many arguments have been passed to the function in js
// later using that i have written a normal addition function and currying addition function