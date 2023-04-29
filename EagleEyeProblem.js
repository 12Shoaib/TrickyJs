const length = 5
let number = []
for(var i=0; i<length; i++);{   //Notice the colan right after the loop
    number.push(i+1)
}

console.log(length)

//The colan afet the loop will terminate the loop as colan sin javascript showcase end of the statement so the
//loop will run for four times but does nothing and then javs script will enter the one time block where because
// the loop was iterating but not entering the scope the value of i has became four when js enter the scope for
//one time it will give 4+1 will be pushed inside the number so that output will be [5].