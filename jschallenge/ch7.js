let firstCard = getRandomCard()
let secondCard = getRandomCard()
  
let cards = []   //array - ordered list of items
let sum = 0
let hasBlackjack = false
let isAlive = false 

let player = {
     Name : "khali",
     Chips : 145 
}


let playerEl = document.getElementById("name")


playerEl.textContent = player.Name + ": $" + player.Chips

let messageEl = document.getElementById("msg1")

let sumEl = document.getElementById("sum-el")  

let cardEl = document.getElementById("card-el")

let newCardEl = document.getElementById("newCard") 

// console.log(cards) 


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
     if (randomNumber > 10 )  {
    return 10
   } else  if(randomNumber === 1 ) {
    return 11
   }
    else {
    return randomNumber 
   }
   
    return randomNumber   // or return Math.fl.....

}


// let sumEl = document.querySelector("#sum-el")  // this or the one above it 
// console.log(messageEl) 

//  let message2 = ("Drawing a new game!") 
let message = ""


function startGame() {  
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()  
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard  
    isAlive = true
    renderGame()  
}
function renderGame() { 
    // console.log("started") 
    cardEl.textContent = "cards: " 
    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent +=  cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum 
     
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
     
     }
     else if (sum === 21) {
         message = "you've got Blackjack! "
         hasBlackjack = true
        
     } else {
         message ="you are out of the game! "
         isAlive = false
     } 
     messageEl.textContent = message  
    //  console.log(message) 
} 

function newGame() {
    console.log("Drawing a new Card from deck! ")
    // newCardEl.textContent = message2   
    if(isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum = sum + card
        cards.push(card) 
        console.log(cards) 
        renderGame()  
    }
    
     
   
     

    
} 
// startGame()
 


 
