//imp feature of js

function objectConstructor (name , age) {
    this.name = name,
    this.age = age
}
objectConstructor.prototype.greet = "created my first prototype"

const person = new objectConstructor('Shoaib' , 11)


console.log(person.greet)