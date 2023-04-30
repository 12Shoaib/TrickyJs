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
  
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// here both of the arrays are refering to same memroy aderess and the changes will be reflect on each and 
// every array in the above.


console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

//check the output on different problems.
console.log("0 || 1 = "+(0 || 1));    //the zero here is an falsy value in js
console.log("1 || 2 = "+(1 || 2));     // in this case one is first evaluated and it will return true so interpreter won't go to 2
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

//Diiferent value . In case of or operaore in js it is always executed from left to right and as x || y and if 
// x is returning the truthy value the interpreter stop execution and moves towards the next piece of code in this case y is never executed.
//where as if x is falsy value then it goes to execiute the y value and if it is true then it is going to return it

//Incase of && operator it is also evaluated as x&&y and x is executed first and if the x is false then the x is 
// returned on the output screen and y is not executed as in boolean is any of the value becomes false the 
// fails there . where as if the value is returning the true value then the execution willl went to execute y and
//  if both the values return true then the y is last evaluated so it return y in the output.

console.log(false == '0')
console.log(false === '0')

//In the both refering to falsy value then it will return true and where as the the === will check for type of
// the false then it will retrun false in second condition.



var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]) // the output will be 456 not 123 here why the reason is the above will be read as

// var a={},
// b={key:'b'},
// c={key:'c'};

// a['[object Object]']=123;
// a['[object Object]']=456;

// console.log(a[b]); // outputs 456
// console.log(a[c]); // outputs 456


console.log(
    (function f(n){
        return (
        (n > 1) ? 
        n * f(n-1) 
        :
         n)
    })(10));

// the above code will return a factorial of 10

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

//the output here will be 1 because of 1

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

//here stoleSecretIdentity is when trying to invoke at that time the this keyword is refering to global object
// in non-strict mode and in strict mdoe it is refering to undefined.