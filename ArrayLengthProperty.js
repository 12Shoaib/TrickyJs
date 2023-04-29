const array = [1,2,3,4,5,6,6,7,7]
array.length = 0

console.log(array[4])

//The ouput will be undefined as the length we have assigned it to be zero so js will delete the elements
//and the size of the array will be considered as zero.


const arrayValue = (value) => {
    return
    value
}

console.log(arrayValue(10))

//The output here will be undefined as the return statement will implicitly have a colan where
// js will stop excetution seeing that colan.
