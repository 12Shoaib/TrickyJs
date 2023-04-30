//Hoisting : This is js behavior were varaibles and functions are moved to the
//top of thier respective scopes before code is executed.this means they we can use functions and variables 
//before declaration, as long as they are declared some where within same scopes.

//Note : hoisting is applied to functions and variables(var,let and const) but 
//in case of var it will return undefined and where as let and const are in TDZ(Temporal dead zone)

//example 1
console.log(sum(2,2))

function sum(x,y) {
    return x+y
}

//exmaple 2 

console.log(x)
var x= 10  // as i mentioned in case of var the hoisting will happen and the o/p wil be 'undefiend'


//example 3
console.log(y,z)
//Here let and const are hoisted but they are in Temporal dead zone thats why they will throw an refernce error

const y = 10
let z = 11

// exmaple 3
myVar;   
myConst; 

var myVar = 'value';
const myConst = 3.14;

