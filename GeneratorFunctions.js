function* generatoFunction () {
    let i = 0
    let a =true
    while(a){
        yield i++
        if(i===10){
        a=false
        }
    }
}
const gen = generatoFunction()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

