const board = document.getElementById("board");
const movesText = document.getElementById("moves");

let cardsArray = ["A","A","B","B","C","C","D","D"];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

// Shuffle cards
cardsArray.sort(() => 0.5 - Math.random());

// Create cards
cardsArray.forEach(letter => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = letter;
  card.innerText = "?";

  card.addEventListener("click", flipCard);
  board.appendChild(card);
});

function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.innerText = this.dataset.value;
  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  movesText.innerText = "Moves: " + moves;

  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    resetTurn();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.innerText = "?";
      secondCard.innerText = "?";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}