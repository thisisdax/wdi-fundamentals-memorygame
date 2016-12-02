var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];
var scoreCount = 0;
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

function shuffle(a) {
  var currentIndex = a.length, tempValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = a[currentIndex];
    a[currentIndex] = a[randomIndex];
    a[randomIndex] = tempValue;
  }
  return a;
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
    if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
      cardsInPlay = [];
    }
};

var isMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    scoreCount++;
    setTimeout(function() {
      alert("You found a match!");
    }, 200);
    updateScore();
  } else {
    setTimeout(function() {
      alert("Sorry, try again!");
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

var createScoreBoard = function () {
  var scoreBoard = document.createElement('div')
  scoreBoard.setAttribute('id', 'score');
  scoreBoard.innerHTML = "<p>Your score: </p>" + scoreCount;
  gameboard.appendChild(scoreBoard);
};

var updateScore = function () {
  document.getElementById('score').innerHTML = "<p>Your score: </p>" + scoreCount;
};

var reset = function () {
  for (var i = gameboard.children.length; i > 0; i--) {
      gameboard.removeChild(gameboard.children[0]);
    }
  cardsInPlay = [];
  scoreCount = 0;
  createScoreBoard();
  shuffle(cards);
  createCards();
};
createScoreBoard();
shuffle(cards);
createCards();
