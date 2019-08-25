"use strict";

const TRIGRAMS = [
  {name : "Heaven", binary : "xxxxxxxxx"},
  {name : "Thunder", binary : "xoxxoxxxx"},
  {name : "Water", binary : "xoxxxxxox"},
  {name : "Mountain", binary : "xxxxoxxox"},
  {name : "Earth", binary : "xoxxoxxox"},
  {name : "Wind", binary : "xxxxxxxox"},
  {name : "Fire", binary : "xxxxoxxxx"},
  {name : "Lake", binary : "xoxxxxxxx"}
];

const RANDOMTRIGRAM = TRIGRAMS[Math.floor(Math.random()*TRIGRAMS.length)];

const CONTAINER = document.getElementById("container");

const BINARYARRAY = RANDOMTRIGRAM.binary.split("");

document.getElementById("name").innerHTML = `Your Trigram is: ${RANDOMTRIGRAM.name}!`;

for (let n=0; n < BINARYARRAY.length; n++){
  const LINES = CONTAINER.appendChild(document.createElement("div"));
  LINES.classList.add(BINARYARRAY[n]);
};
