//Example one
const outerFunction  = () => {
    var number = 10

    const innerFunction = () => {
        console.log(number)
    }
    return innerFunction()
}

outerFunction()

//Example two

const sum = (num) => {

    const innerFunction = () => {
        console.log(num)
    }
    return innerFunction()
}

sum(20)

//Closures : The process of being able to have access to outer function variables,
// and arguments are known as closures.
