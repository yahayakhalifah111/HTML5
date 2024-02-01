'use strict'
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number!'


document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23 

console.log(document.querySelector('.guess').value); */

let number = Math.trunc(Math.random() * 20) + 1 // or Math.floor( ) 

let score = 20; 
let highScore = 0 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.btnCheck').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    //when there is not input 
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!' 
        displayMessage('No Number!')  
    } 
    //when player wins 
    else if (guess === number) {
        // document.querySelector('.message').textContent = 'Correct Number!' 
        displayMessage('Correct Number!') 

          

        // document.querySelector('.btnAgain').textContent = 'Again' 
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem'; 
        
        if(highScore > score ) {
            highScore = score 
            document.querySelector('.highScore').textContent = highScore
        }
     }   // when guess is different from number 
     else if(guess != number) {
        if(score > 1) { 
            // document.querySelector('.message').textContent =  
            // guess > number ? 'Too High!!' :  "Too low";  
            displayMessage( guess > number ? 'Too High!!' :  "Too low") 
            score--
            document.querySelector('.score').textContent = score
        } else {
            // document.querySelector('.message').textContent = 'you lost the game' 
            displayMessage('You lost the game! ')  
            document.querySelector('.score').textContent = 0 
        } 

     }
    })
     
     



     // before refactore 
     // when it is too high
     /*
     else if (guess > number) {
    
        if(score > 1) { 
            document.querySelector('.message').textContent = 'Too High!!' 
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'you lost the game' 
            document.querySelector('.score').textContent = 0 
        }

    }

     else if ( guess < number) { 
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too low!'
            score--
            document.querySelector('.score').textContent = score 
        } else {
            document.querySelector('.message').textContent = 'you lost the game' 
            document.querySelector('.score').textContent = 0 
        }
        

    }

}) */



document.querySelector('.btnAgain').addEventListener('click', function() {
   score = 20
   number = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.score').textContent = score
    // document.querySelector('.message').textContent = 'Start guessing...' 
    displayMessage('Start guessing....') 
   document.querySelector('.number').textContent  = '?' 
   document.querySelector('.guess').value = ''; 
   document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'; 


})
