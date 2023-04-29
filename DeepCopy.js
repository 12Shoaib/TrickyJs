//DeepCopy : Deep copy creates a new object that has all the values and properties of 
// original object , INCLUDING ALL NESTED OBJECTS ASLO. This means that everything
//inside the copied will have a new memory so changes in one will not effect on 
//the other. we can do deep copy by this methods

//JSON.Parse() & JSON.Stringify

//example 1

const obj = {a:1 , b:3 ,c:{d:4}}
const copy = JSON.parse(JSON.stringify(obj))

//before changes
console.log(obj , 'gap' , copy)

obj.c.d = 'Mohd Shoaib'

//After Changes
console.log(obj , 'gap' , copy) //Now you can see that changes in one are not reflecting on the other this means the object is now deeply copied.
