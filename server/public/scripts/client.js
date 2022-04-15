////////////////////////////////////////////////////////////
//jQuery initialization/onReady
////////////////////////////////////////////////////////////
$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submitButton').on('click', onSubmitClick)
  $('#restartButton').on('click', gameStart)
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
//Function: gameStart()
////////////////////////////////////////////////////////////
function gameStart() {
  // AJAX GET
  $.ajax({
    method: 'GET',
    url: '/gamestart'
  }).then(function (response) {
    console.log('the server sent me a guess evaluation');
    console.log(response);
  })
  }
////////////////////////////////////////////////////////////
//Function: getAnswerStatusFromServer
////////////////////////////////////////////////////////////
function getAnswerStatusFromServer() {
// AJAX GET
$.ajax({
  method: 'GET',
  url: '/guesses'
}).then(function (response) {
  console.log('the server sent me a guess evaluation');
  console.log(response);
})
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
  } else {
    roundCounter++;
  }
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: guess
  })
  .then( function (response){
console.log('response of POST is:');
console.log(response);
getAnswerStatusFromServer();
  })
}

////////////////////////////////////////////////////////////
//Function: Append Results and Rounds to DOM
////////////////////////////////////////////////////////////
function appendToDOM(){
  $('#roundCount').empty();
  $('#roundCount').append(`
   ${roundCounter}
  `)

}

























//NOTE: This section is for the server.
///////////////////////////////////////////////////////////
// function createRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);

// }
// console.log(createRandomNumber(1,26)); // THIS FUNCTION HAS BEEN SENT TO SERVER SIDE
///////////////////////////////////////////////////////////


