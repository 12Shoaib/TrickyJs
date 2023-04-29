// TDZ : This behavior in js will happen when your decalring variable with let
// and const and trying to access them before the initialisation

//example 1:
console.log(x)
let x

//example 2

console.log(z)

const z = 10

//these variables are in temporal dead zone when you try to access them
// this will throw an reference error