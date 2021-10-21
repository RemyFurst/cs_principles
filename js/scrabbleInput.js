// global variables always go at the top
// array, can be accesed by an index, sets the "point" to an array set.
let POINTS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
// array of letters 
// js doesn't directly work with ascii
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let player1score = 0;
let player2score = 0;

// utility functions
// check if is upper
// returns true or false - is string input = to thats strings upercase
// string is an array of chars
function isupper(str) {
  return str === str.toUpperCase();
}

// check if is lower
function islower(str) {
  return str === str.toLowerCase();
}

// return points by associating the index of the letter with the POINTS array
// from letters, what is index of that letter
// index of is a tool
// gets index of value of letter in letters aray, 
// takes that spot in the array 
// then gets the value at that address in the points array 
function getPoints(letter){
  let index = Letters.indexOf(letter);
  return POINTS[index];
}

// can you in JS perform an islower/isupper and strlen?
function computeScore(word){
    let score = 0;
    for (i = 0, n = word.length; i < n; i++){
        // if (islower(word[i])){
        //   console.log(word[i] + "this is lower case");
        // }
        // if (isupper(word[i])){
        //   console.log(word[i] + " is upper case");
        // }

        console.log("letter is " + (word[i]));
        console.log("letter score is " + getPoints(word[i].toLowerCase()));
        // score is adding getpoints value - score of letter value - 
        // get points for every letter - but the lowercase version of the array
        // toLowerCase is js - its a method - function that goes with an object (it has a dot) 
          // water bottle .holdwater
        score += getPoints(word[i].toLowerCase());
        console.log(score);
    }
}
// testing hello cause we havent connected it up with user input
computeScore("hello");

// SCOPE
let inputVal = null;

function getInputValue() {
    // Selecting the input element and get its value 
    inputVal = document.getElementById("inputId").value;
    // Displaying the value
    output();
  }

  function output(){
    document.getElementById("output").value = inputVal;
  }

  function doSomething(){
    computeScore(getInputValue());
  }

  // function getInputValue() {
  //   // Selecting the input element and get its value 
  //   return document.getElementById("inputId").value;
  //   // Displaying the value
  // }
  // function doSomething(){
  //   computeScore(getInputValue());
  // }



