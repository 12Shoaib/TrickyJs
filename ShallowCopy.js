//Shallow copy :  shallow copies create a new object that has same properties 
//and values of the orignal object but the object reference is not copied in single level object if it is not having any nested obj.
// where as if the orignal object has nested objects then in thi case these nested
//objects are going to refer to same memory adress location the changes made
//on original will reflect on the copied object as well.
//We can do shallow copy by following methods
//Spread Operator
//Object.assign() method

//example 1 :
const obj = {a:'shoaib' , b:'Mohd'}
const copy = {...obj}   
obj.a= '1'
console.log(obj, copy) // both the values are different as in this the object is deeply copied because it doesn't have any nested objects

//example 2:

const obj1 = {a:1 , b:2 , c:3}
const copy1 = Object.assign({} , obj1)

console.log(obj1 , copy1)

//example 3 :

const nested = { a:1 ,b: {name:'shoaib'}}
const copy2 = {...nested}   

copy2.b.name = "Mohd" 

console.log(nested,copy2) // because of the nested object the changes made in one are reflecting in the other
