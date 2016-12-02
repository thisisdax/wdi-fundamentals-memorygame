var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];
/* if (cardOne === cardTwo) {
  alert("You found a match!");
} else {
  alert("Sorry, try again!");
} */

var gameboard = document.getElementById('game-board');

var createCards = function () {
  for (var i = 0; i < cards.length; i++) {
    var createDiv = document.createElement('div');
    createDiv.className = 'cards';
    createDiv.setAttribute('data-card', cards[i]);
    createDiv.addEventListener('click', isTwoCards);
    gameboard.appendChild(createDiv);
  }
};

var isTwoCards = function () {
    if (this.getAttribute('data-card') === 'King') {
    this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2012/04/11/13/52/spades-28320_960_720.png' alt='King of Spades' class='cards') />";
    } else {
    this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2012/04/11/13/48/hearts-28307_960_720.png' alt='Queen of Hearts' class='cards') />";
    }
    cardsInPlay.push(this.getAttribute('data-card'));
    if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
      cardsInPlay = [];
    }
};

var isMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again!");
  }
  cardsInPlay
};

createCards();
