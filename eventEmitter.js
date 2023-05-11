const EventEmitter = require('events')

const bookCar = new EventEmitter()

bookCar.on('booking' , (book) => {
    console.log('my first event emitter' , book)
})

let obj = {
    id:1121,
    driverName:"Nikolas JohnSon",
    status: 'booked successfully, it is on its way'
}

bookCar.emit('booking' ,obj)
