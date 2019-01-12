// const person = {
//     age: 26,
//     location: {
//         city: 'London',
//         temp: 23
//     }
// }
// const {name: firstName = 'Anonymus', age} = person
// console.log(`${firstName} is ${age}.`)
// const {city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature}°C in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'self-published' } = book.publisher
// if ( publisherName) {
//     console.log(publisherName)
// }

const adress = ['1299 S Juniper Street', 'London', 'Plensylvania', '12345']

const [, , state = 'New York'] = adress

console.log(`You are in ${state}`)