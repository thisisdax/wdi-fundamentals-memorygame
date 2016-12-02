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
  createBtn();
};

var isTwoCards = function () {

    if (this.getAttribute('data-card') === 'King') {
    this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2012/04/11/13/52/spades-28320_960_720.png' class='cards' alt='King of Spades')/>";
    cardsInPlay.push(this.getAttribute('data-card'));
    } else if (this.getAttribute('data-card') === 'Queen') {
    this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2012/04/11/13/48/hearts-28307_960_720.png' class='cards' alt='Queen of Hearts')/>";
    cardsInPlay.push(this.getAttribute('data-card'));
    } else {
    alert("Pick another card!");
    }
    this.setAttribute('data-card', 'chosen');
    if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
      cardsInPlay = [];
    }
};

var isMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    setTimeout(function() {
      alert("You found a match!");
    }, 200);
  } else {
    setTimeout(function() {
      alert("Sorry, try again!");
      reset();
    }, 200);
  }
};

var createBtn = function () {
  var resetBtn = document.createElement('button');
  resetBtn.setAttribute('id', 'reset');
  resetBtn.addEventListener('click', reset);
  resetBtn.innerHTML = "Reset Board";
  gameboard.appendChild(resetBtn);
};

var reset = function () {
  var gamereset = document.getElementById('game-board');
  for (var i = gamereset.children.length; i > 0; i--) {
      gamereset.removeChild(gamereset.children[0]);
    }
  cardsInPlay = [];
  createCards();
};
createCards();
