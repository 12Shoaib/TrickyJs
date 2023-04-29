//CallbackHell : The process where there are multiple level of nested callbacks
// making the code unreadable , unmaintaibale . This happen when execution of
// function require another function as call back and this function will require
//another call back is this situation of nested callbacks is callback hell.

//Example 1

const firstFunction = (callback) => {
    setTimeout(() => {
        console.log('first function')
        callback()
    },1000)
}
const secondFunction = (callback) => {
    setTimeout(() => {
        console.log('second function')
        callback()
    } , 1000)
}
const thirdFunction = (callback) => {
    setTimeout(() => {
        console.log('third function')
        callback()
    },1000)
}

firstFunction(() => {
    secondFunction(() => {
        thirdFunction(() => {
            console.log('all functions are called in callback hell manner')
        })
    })
})