"use strict";

// Variables
var options = ["rock", "paper", "scissors"];

let play = function (selected) {
  let opponent = getOpponent();
};

// Randomly shuffle an array

let shuffle = function (array) {
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

let getOpponent = function () {
  return shuffle(options.slice())[0];
};

// Listen for click events
document.addEventListener(
  "click",
  function (event) {
    let selected = event.target.getAttribute("data-rps");
    console.log(selected);
    if (!selected) return;
    play(selected);
  },
  false
);
