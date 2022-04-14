////////////////////////////////////////////////////////////
//jQuery initialization/onReady
////////////////////////////////////////////////////////////
$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  gamePrep();
  $('#submitButton').on('click', onSubmitClick)
}

////////////////////////////////////////////////////////////
//Variables
////////////////////////////////////////////////////////////

//Counts how many rounds there have been 
let roundCounter = 0;

// sets default win status as false. Changes as we get new
// information back from the server
let player1win = false;
let player2win = false;
let player3win = false;








////////////////////////////////////////////////////////////
//Functions
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//Function: Game Prep
////////////////////////////////////////////////////////////
function gamePrep(){
// AJAX GET
}
////////////////////////////////////////////////////////////
//Function: Round Counter
////////////////////////////////////////////////////////////
function onSubmitClick(){

  let player1Guess = $('#playerOneIn').val();
  let player2Guess = $('#playerTwoIn').val();
  let player3Guess = $('#playerThreeIn').val();
  let guess = {
    playerOne: player1Guess, 
    playerTwo: player2Guess, 
    playerThree: player3Guess}
  ;
  console.log('The object of all guesses ------>', guess)
  if (!player1Guess || !player2Guess || !player3Guess){
    alert('Please enter a number in all inputs')
    return;
  }
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: guess
  })
  .then( function (response){

  })
}

////////////////////////////////////////////////////////////
//Function: Append Results and Rounds to DOM
////////////////////////////////////////////////////////////
function appendToDOM(){
  $('#game-status').empty();
  $('#game-status').append(`
  Round Counter: ${roundCounter}
  `)

}

























//NOTE: This section is for the server.
///////////////////////////////////////////////////////////
// function createRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);

// }
// console.log(createRandomNumber(1,26)); // THIS FUNCTION HAS BEEN SENT TO SERVER SIDE
///////////////////////////////////////////////////////////


