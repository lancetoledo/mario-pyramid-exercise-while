// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Mario Pyramid

// Intialized Variables
let pyramidBlock = "#";
// Intialized an empty string that will be filled with pyramidBlocks each tteration
let row = "";
// Created a function that takes an int for the amount of rows in the pyramid
function buildPyramid(rowAmount) {
  // While loop that decrements while rowAmount is greater than 0
  while (rowAmount > 0) {
    //Adds pyramidBlock to row
    row += pyramidBlock;
    console.log(row);
    //rowAmount will decrement and repeat the above code until it reaches 0
    rowAmount--;
  }
}

buildPyramid(9);
