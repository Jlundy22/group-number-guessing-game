$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
}

function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);

}
console.log(createRandomNumber(1,26));