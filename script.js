"use strict";

// Listen for click events
document.addEventListener(
  "click",
  function () {
    let selected = event.target.getAttribute("data-rps");
    console.log(selected);
    if (!selected) return;
  },
  false
);
