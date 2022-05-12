

var scores, roundScore,activePlayer,gamePlaying;

init ();

var lastDice;


document.querySelector('.btn--roll').addEventListener('click', function() {
      if (gamePlaying) {
            
      }
      //1. random number
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;

      //2. display the result
      document.getElementById('dice-1').style.display = 'block';
      document.getElementById('dice-2').style.display = 'block';
      document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
      document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

      //3. update the round score if the rolled number was not a 1
      if(dice1 !== 1 && dice2 !== 1){
        //add score
        roundScore += dice1 + dice2;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
  }else{
        //Next player
        nextPlayer();
  }
     /* if (dice === 6 && lastDice === 6){
          scores[activePlayer] = 0;
          document.querySelector('#score--' + activePlayer).textContent = '0';
          
      } else if(dice !== 1){
            //add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
      }else{
            //Next player
            nextPlayer();
      }
      lastDice = 'dice';*/
});

document.querySelector('.btn--hold').addEventListener('click', function() {
      
      // add current score to global sacores
      scores[activePlayer] += roundScore;

      // update the ui
      document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
      var input = document.querySelector('.final-score').value;
      var winningScore;

      if(input) {
          winningScore = input;
      }else{
          winningScore = 100;
      }

      //check if the player wins the game
      if(scores[activePlayer] >= winningScore){
            document.querySelector('#name--' + activePlayer).textContent = 'winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('active');
            gamePlaying = false;
      }else {
            //next player
            nextPlayer();
      }
}); 

function nextPlayer() {
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current--0').textContent = 0;
            document.getElementById('current--1').textContent = 0;

            document.querySelector('.player--0').classList.toggle('player--active');
            document.querySelector('.player--1').classList.toggle('player--active');

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init );



function init() {
      scores = [0,0];
      activePlayer = 0;
      roundScore = 0;

     document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none';

      document.getElementById('score--0').textContent = '0';
      document.getElementById('score--1').textContent = '0';
      document.getElementById('current--0').textContent = '0';
      document.getElementById('current--1').textContent = '0';
      document.getElementById('name--0').textContent = 'player 1';
      document.getElementById('name--1').textContent = 'player 2';
      document.querySelector('.player--0').classList.remove('player--winner');
      document.querySelector('.player--1').classList.remove('player--winner');
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1' ).classList.remove('player--active');
      document.querySelector('.player--0' ).classList.add ('player--active');


}



//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score--0').textContent; 