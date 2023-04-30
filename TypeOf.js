function foo()  {
    console.log('hi')
}
const bar = () => {
    console.log('tricky')
}

console.log(typeof foo === 'function' )
console.log(typeof bar === 'function' ) //The both are function so output will be true 

const value = null

console.log(typeof value === 'null') // thw is false because the output of null is an object not null
//NOTE:THE TYPE OF NULL IS AN OBJECT.

const firstName = undefined
console.log(typeof firstName === 'undefined') //NOTE:THE TYPE OF UNDEFINED IS UNDEFINED.

const number = 12
console.log(typeof number === 'number') // The type of number is number

const array = [1,2,3,4,[1,2,3,4,5]]
console.log(typeof array === 'array') //NOTE: THE TYPE OF ARRAY IS AN OBJECT

const object = {a:'shoaib' , b:12}
console.log(typeof object === 'object') //NOTE:THE TYPE OF OBJECT IS AN OBJECT.

const bool = false
console.log(typeof bool === 'object') //NOTE:TYEPE OF BOOL IS AN BOOLEAN

const string = 'Shoaib'
console.log(typeof string == 'object') //NOTE:THE TYPE OF STRING IS STRING.

const timer = setTimeout(() => {
    console.log('helo')
},1000)

console.log(typeof timer) //Here you can see the type of is an object as we are using named function here