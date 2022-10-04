let isAlive = false
let hasBlackJack = false
let cards = []
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let playerEl = document.getElementById('player-el')

let player = {
    name: "Per",
    chips: 145
}



function getRandomcard() {

    let randNum = Math.floor((Math.random() * 13) + 1)
    
    if (randNum == 1) {
        return 11
    } else if (randNum > 10) {
        return 10
    } else {
        return randNum
    }
    
}

function startGame() {

    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    hasBlackJack = false

    renderGame()
}

function renderGame() {
    
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += " " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
    playerEl.textContent = player.name + ": $" + player.chips
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        player.chips = player.chips + 10 
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        player.chips = player.chips - 10
    }

    messageEl.textContent = message

}

function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        let newCard = getRandomcard()
        sum = sum + newCard
        cards.push(newCard)
        renderGame()
    }
   
}