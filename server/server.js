
////////////////////////////////////////////////////////////
// Server initialization
////////////////////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { send } = require('express/lib/response');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


////////////////////////////////////////////////////////////
//Variables
////////////////////////////////////////////////////////////
let answer = 0;
let player1;
let player2;
let player3;
let player1Correct = false;
let player2Correct = false;
let player3Correct = false;
let anyPlayerAnswerObject = {
  player1: `${player1Correct}`,
  player2: `${player2Correct}`,
  player3: `${player3Correct}`,
  randomNumber: answer
};
////////////////////////////////////////////////////////////
//Functions
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//Function: Generate Random Number
////////////////////////////////////////////////////////////
function generateAnswer(){
    answer = createRandomNumber(1,26)
    return answer;
}


////////////////////////////////////////////////////////////
//Function: Compare Guesses to Answers
////////////////////////////////////////////////////////////
function compareGuesses() {
  if (answer === player1) {
    player1Correct = true;  }
  if (answer === player2) {
    player2Correct = true;
  }
  if (answer === player3) {
    player3Correct = true;
  }
}

////////////////////////////////////////////////////////////
//Function: Random Number Function
////////////////////////////////////////////////////////////

function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

////////////////////////////////////////////////////////////
//GET
////////////////////////////////////////////////////////////
app.get('/gamestart', (req,res)=>{
  generateAnswer();
  player1Correct = false;
  player2Correct = false;
  player3Correct = false;
  console.log(anyPlayerAnswerObject);
}) 

////////////////////////////////////////////////////////////
//POST
////////////////////////////////////////////////////////////
app.post('/guesses', (req,res)=>{
  console.log('POST /guesses')
  let guess = req.body;
  // generateAnswer();
  player1 = guess.playerOne;
  player2 = guess.playerTwo;
  player3 = guess.playerThree;
  compareGuesses();
  res.sendStatus(200);
})

app.get('/guesses', (req, res) => {
  console.log('GET /guesses');
  res.send(anyPlayerAnswerObject)
})