//Comment pseudocode up here
// Objective: take a message from a user and encrypt it
// Then using the cypher decrypt it


/* 
1. Get input from user


*/
function getInputValue() {
  // Selecting the input element and get its value 
  return document.getElementById("inputId").value;
  // Displaying the value
}


// global variables go at the top

//index with coresponding letters
let EKEY = ['!', '#', '$', '%', '^', '&', '*',' >', '<',' @', '-',' _', '+', '=', '?', '/', '2', '1', '3', '4', '5', '6', '7', '10'];
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// utility functions
// check if is upper
function isupper(str) {
  return str === str.toUpperCase();
}

// check if is lower
function islower(str) {
  return str === str.toLowerCase();
}

// return points by associating the index of the letter with the POINTS array

function getEKEY(letter){
  let index = Letters.indexOf(letter);
  return EKEY[index];
}

// can you in JS perform an islower/isupper and strlen?- yes
function Encrypt(word){
    let word = getInputValue();
    let Emessage  = [];
    for (i = 0, n = word.length; i < n; i++){
        // if (islower(word[i])){
        //   console.log(word[i] + "this is lower case");
        // }
        // if (isupper(word[i])){
        //   console.log(word[i] + " is upper case");
        // }
        console.log("letter is " + (word[i]));
        console.log("Encryption " + getEKEY(word[i].toLowerCase()));
        let CharEKEY = getEKEY(word[i].toLowerCase());
        //setting charekey to the encrypted output
        
        Emessage.push(CharEKEY)
        // pushing the 
        console.log(Emessage);
        //display the emmessage in console
        
        
        
    }
    return Emessage;
}

// function Dcrypt(word){
//   let Emessage  = [];
//   for (i = 0, n = word.length; i < n; i++){
//       // if (islower(word[i])){
//       //   console.log(word[i] + "this is lower case");
//       // }
//       // if (isupper(word[i])){
//       //   console.log(word[i] + " is upper case");
//       // }
//       console.log("Encryted Char is " + (word[i]));
//       console.log("Decryption " + getEKEY(word[i].toLowerCase()));
//       let CharEKEY = getEKEY(word[i].toLowerCase());
//       Emessage.push(CharEKEY)
      
      
      
//   }
//   return Emessage;
// }


// SCOPE>>>>>>>>>>>


  

 function doSomething(){
    let score = Encrypt(getInputValue())
    // alert("You scored " + score );
    output("The encrypted message is " + score + ".");
  }

  // failing function due to inability to access element on page and alter it dynamically
  function output(content){
    document.getElementById("display").innerHTML = Emessage;
  }

