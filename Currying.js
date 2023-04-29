function one(x)  {
   return function two (y){
        return function third(z){
            return x*y*z
        }
    }

}

console.log(one(1)(2)(3))

//Currying makes it easier to call multiple arguments instead of passing all
//arguments at once, we can call the functions with one argument at one time
//which makes code readable and maintainable


//example 2

function add(x){
    return function(y){
        return x+y
    }
}

console.log(add(10)(1))

