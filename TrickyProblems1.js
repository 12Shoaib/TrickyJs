var number = 10
function display(){
    console.log(number)
    var number =20
}

display()
//The output is 'undefined' because of the hoisting inside the function. Inside the fucntion the number is
// is decalred with var so hoisting must have moved the code like this 'var number' on line 3 becasue of that 
// the output is undefined

function foo() {
    let a = b = 0;
    a++;
    return a;
  }
  console.log(foo())
  //here the code will be like let a  = (b=0) were b is fall into global variable and the value of zero get
  //assigned to both of the them so then a will get incremented but in strict mode it will throw error because
  // instrict mode it will ask for type of variable let or const or var.
  