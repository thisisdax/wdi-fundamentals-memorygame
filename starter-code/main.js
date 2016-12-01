var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

/* if (cardOne === cardTwo) {
  alert("You found a match!");
} else {
  alert("Sorry, try again!");
} */

var gameboard = document.getElementById('game-board');

var createCards = function () {
  for (var i = 0; i < 4; i++) {
    var createDiv = document.createElement('div');
    createDiv.className = 'cards';
    gameboard.appendChild(createDiv)
  }
};

createCards();
