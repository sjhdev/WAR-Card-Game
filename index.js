let deckId = ""
let card = ""
let computerScore = 0
let playerScore = 0

const cardArea = document.getElementById("cards")
const winnerArea = document.getElementById("winner-area")
const remainingCards = document.getElementById("remaining-cards")
const newDeckPull = document.getElementById("new-deck")
const newCardPull = document.getElementById("new-card")
const computerScoreEl = document.getElementById("pc-score")
const playerScoreEl = document.getElementById("hm-score")

const card1object = {
    value: ""
}

const card2object = {
    value: ""
}

winner(card1object, card2object)

newDeckPull.addEventListener("click", newDeck)
newCardPull.addEventListener("click", newCard)


function newDeck(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id

            const cardsLeft = [data.remaining]
            remainingCards.innerHTML = `Cards: ${cardsLeft}`
        })
}

function newCard(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            card = data.cards
            cardArea.children[0].innerHTML = `
            <img src="${data.cards[0].image}" class="card">
            `
            cardArea.children[1].innerHTML = `
            <img src="${data.cards[1].image}" class="card">
            `
            const winnerText = winner(data.cards[0], data.cards[1])
            winnerArea.innerHTML = `${winnerText}`

            const cardsLeft = [data.remaining]
            remainingCards.innerHTML = `Cards: ${cardsLeft}`

            if ( data.remaining === 0 && computerScore > playerScore){
                newCardPull.disabled = true
                newCardPull.style.backgroundColor = "yellow"
                newCardPull.innerHTML = "Game Over"
                winnerArea.textContent = "COMPUTER WINS THE WAR"
            } else if ( data.remaining === 0 && playerScore > computerScore){
                winnerArea.textContent = "YOU WIN THE WAR"
            } 

            if (winner(card1ValueIndex)){
                playerScore.innerHTML += "1"
            }
        })
        
}

function winner(card1, card2){
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)

    if ( card1ValueIndex > card2ValueIndex){
        computerScore++
        computerScoreEl.textContent = `Computer Score: ${computerScore}`
        return "Computer wins"
    } else if ( card1ValueIndex < card2ValueIndex){
        playerScore++
        playerScoreEl.textContent = `Player Score: ${playerScore}`
        return "You win"
    } else {
        return "War!"
    }
}





// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

