//Closures : The process of being able to have access to outer function variables,
// and parameters are known as closures.
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


//Closures very Tricky Question

var i;
for (i = 0; i < 5; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

//The output here is 3 for three times as every time the loop start iterating the it enters the funtion and it gets
//updated everytime.Now as we are having a setTimout here which is an asynchronous task in js this will execute
//after complition of synchrounous so when finally when synchronous is completed by that time the value of i '
//is 3 as it has completed all its iterations and then the value gets printed .
