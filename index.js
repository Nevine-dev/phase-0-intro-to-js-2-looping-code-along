/*const { wrap } = require("module")

// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy bithday to me!`)
    debugger
}
const gifts = ['benz', 'phantom', 'prado']
function presentGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Presented ${gifts[i]} and added some respect!`)
    }
    return gifts
}
presentGifts(gifts)
//These have been code snippets of the course content
//Do not mind them much
//The solutions are right after this
**/

function writeCards(names, eventName) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cards
}
function countDown(n) {
    while (n >= 0) {
        console.log(n)
        n--
    }
}
(countDown(10))
