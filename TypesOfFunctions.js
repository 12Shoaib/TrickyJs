//function statment or function declaration

function statement () {
    console.log('this is an example of function statment or functionDeclaration')
}

//function expression
const expression = function() {
    console.log('this is an example of function expression')
}

//fat arrow function

const fatArrowFunction = () => {
    console.log('the new way of writing a function that is arrow function')
}

//constructor function
function constructorFunctions (name , age) {
    this.name = name
    this.age = age
}

const exampleConstructorFunction = new constructorFunctions('Mohd Shoaib' , 22)

console.log(exampleConstructorFunction)

function add (num1 , num2) {
    this.num1 = num1
    this.num2 = num2
    this.total = function(){
        return this.num1 + this.num2
    }
}

const additionWithConstructorFunction = new add(10 , 20)
console.log(additionWithConstructorFunction.total())