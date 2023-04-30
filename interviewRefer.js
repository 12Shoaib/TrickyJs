//question 1
(function(){
    console.log(1)
    setTimeout(() => {console.log(2)},1000)
    setTimeout(() => {console.log(3)},2000)
    console.log(4)
})

//Output : 1,4,2,3

//question 2
const a = 0.2         //CHALLENGUNG ONE**
const b = 0.3
const c = a+b

console.log(c == 0.5) //here it is true

console.log(0.2 + 0.1);
console.log(0.1 + 0.2 == 0.3); //false here

//Ouptut : it is false here this is because floating point numbers have limited precision,which can lead to small
//rouding error in js. adding certain number as (0.2+0.1) can result in rounding errors, while adding such
// numbers as 0.2 and 0.3 may not

//question 3
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
//the output will appear for first function but not in second function beacause of implicit colan at the end
//of the return in second function as that line contains nothing this will go and implicitly add a colan so 
// from there next lines wont be executed.


let d = {}

['zebra' , 'horse'].forEach(function(k) {
    d[k] = undefined
})

console.log(d)

