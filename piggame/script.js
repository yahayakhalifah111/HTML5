// `script`


//selecting element
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0EL = document.querySelector('#score--0');  //or getElementById() 
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// starting conditions
let playing , activePlayer , currentScore, scores;

const init = function() { 

    score0EL.textContent = 0
    score1El.textContent = 0
    
     scores = [0, 0]
     currentScore = 0;
     activePlayer = 0;
     playing = true;  

     current0El.textContent = 0
    current1El.textContent = 0  
    diceEl.classList.add('hidden')
   //  diceEl.textContent = 0 
   //  btnRoll.textContent = 0  
   //  btnHold.textContent = 0 
   player0El.classList.remove('player--winner')
   player1El.classList.remove('player--winner')
   player0El.classList.add('player--active')
   player1El.classList.remove('player--active')
   
}
init();

const switchPlayer = function () {

    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// rolling Dice functionality 
btnRoll.addEventListener('click', function () {
  
    if(playing) {



        // 1. Generating a random dice roll  
        const dice = Math.floor(Math.random() * 6) + 1;
        // console.log(dice) 

        // 2. Display dice 
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for rolled 1: if true, switch to next player  
        //check if 
        if (dice !== 1) {
            //add dice to current score  
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
            // current0El.textContent = currentScore   
        } else {
            // switch to next player 
            /*  document.getElementById(`current--${activePlayer}`).textContent = 0 
              currentScore = 0
             
              activePlayer = activePlayer === 0 ? 1: 0;    
              player0El.classList.toggle('player--active');
              player1El.classList.toggle('player--active') ; */
            switchPlayer();

        }
    }

})


btnHold.addEventListener('click', function () {
    if (playing) {


        // 1. add current score to active player's score   
        scores[activePlayer] += currentScore;
        // score[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        // 2. check if plater score is >= 100
        //finsh the game 
        if (scores[activePlayer] >= 50) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

        }

        // 3. switch to the next player   
        switchPlayer()   
    }
})


btnNew.addEventListener('click', init)
