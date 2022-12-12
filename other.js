// document.getElementById("gen-deck").addEventListener("click", function(){
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// })

// let getCards = function() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener("click", getCards)

// document.getElementById("new-deck").addEventListener("click", function(){
//     console.log("clicked")
// })

// let voterEmail = function(email){
//     if (voters.voted){
//         return voters.email
//     }
// }

// voterEmail()

// function callback(){
//     console.log("i run")
// }

// setTimeout(callback, 2000)

// function filterArray(array, callback) {
//     const resultingArray = []
//     for ( let array of people){
//         callback(array)
//     }
//     return data(array, people)
//     // Write your filtering logic here
// }

// const voters = [
//     {name: "Joe", email: "joe@joe.com", voted: true},
//     {name: "Jane", email: "jane@jane.com", voted: true},
//     {name: "Bo", email: "bo@bo.com", voted: false},
//     {name: "Bane", email: "bane@bane.com", voted: false}
// ]

// let callback = person => person.voted

// const result = voters.filter(callback)

// console.log(result)

// function filterArray(array, callback) { ******************
//     const resultingArray = []
//     // Write your filtering logic here
//     for (let item of array) {
//         const shouldBeIncluded = callback(item)
//         if (shouldBeIncluded) {
//             resultingArray.push(item)
//         }
//     }
//     return resultingArray
// }

// function filterArray(array, callback) {
//     const resultingArray = []
//     for ( let item of array ){
//         let result = callback(item)
//         if (callback){
//             resultingArray.push(item)
//     } 
//     } return resultingArray
// }

// async function handleClick() {
//     const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     const data = await res.json()
//     remainingText.textContent = `Remaining cards: ${data.remaining}`
//     deckId = data.deck_id
//     console.log(deckId)
// }





