"use strict";

// Variables
const results = document.querySelector("#results");
const options = ["rock", "paper", "scissors"];
const wins = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const play = function (selected) {
  let opponent = getOpponent();
  if (selected === opponent) {
    renderTie(selected);
  } else if (wins[selected] === opponent) {
    renderWin(selected, opponent);
  } else {
    renderLoss(opponent, selected);
  }
};

// Render a "It's a Tie" message
const renderTie = function (selected) {
  results.innerHTML =
    "<h2>Tie!</h2>" + "<p>You both chose " + selected + "</p>";
};

// Render a "You Win" message
let renderWin = function (won, lost) {
  results.innerHTML =
    "<h2>You Win!</h2>" + "<p>" + won + " beats " + lost + "</p>";
};

// Render a "You Lost" message
const renderLoss = function (won, lost) {
  results.innerHTML =
    "<h2>You Lost...</h2>" + "<p>" + won + " beats " + lost + "</p>";
};

// Randomly shuffle an array

const shuffle = function (array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Get a random pick for the opponent

const getOpponent = function () {
  return shuffle(options.slice())[0];
};

// Listen for click events
document.addEventListener(
  "click",
  function (event) {
    let selected = event.target.getAttribute("data-rps");
    if (!selected) return;
    play(selected);
  },
  false
);
