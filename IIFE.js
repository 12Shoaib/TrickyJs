// IIFE : immediately invoking function expression

// example 1

(function(){
    var a = b = 3;
  })();
  
  console.log( (typeof a == 'undefined'));
  console.log( (typeof b == 'undefined'));

// In the above code a is undefined as these code is similar to b=3, var a =b where b is refering
// to the global object and a is to be b. in non strict mode it will be undefined but where as in
// strict mode it will throuhh an reference error as b here is not defined with let ,cont, or var.


// exmple 2

(function(Name){
    console.log('hello' , Name)
})('MohdShoaib')

// simple example of the IIFE with anonymous function

(function addition(a,b){
    console.log(a+b)
})(1,2);

// example for function with name using IIFE

(() => {
    console.log('IIFE USING arrow function')
})()

//IIFE using fat arrow function



