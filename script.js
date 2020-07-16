"use strict";

let play = function (selected) {
  //play the game
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
