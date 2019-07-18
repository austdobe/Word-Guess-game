// var letters = [/a-z/i];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// array of words
var animals = [
  "dog", "cat", "parrot", "falcon", "eagle", "fish", "shark", "aligator", "turtle", "snake", "dolphin", "tiger", "lion", "horse", "zebra", "elephant", "mouse", "squirrle"
];
//random word
var chosenWord = animals[Math.floor(Math.random() * animals.length)];
var underscore = [];
//user Guesses
var right = [];
var wrong = [];
// var userGuess=[];
//DOM manipulation
var gameBoard = document.getElementById("gameBoard")
var wrongGuess= document.getElementsByClassName("wrongGuess");
var restart=document.getElementById("restart");
var live = document.getElementsByClassName("lives")
//scoreboard
var win = 0;
var loses = 0;
var guess = 10;
var lettersLeft=chosenWord.length
//create underscore based on random word
console.log(chosenWord)

for(var i = 0; i <  chosenWord.length; i++){
      underscore[i]="  __  ";
  }
console.log(underscore)
// generate game board
gameBoard.innerHTML = underscore.join("  ")
live.innerHTML=guess;
    //capture user guess
    document.onkeypress = function(event){ 
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      //Validate user guess
      if(letters.indexOf(userGuess)>-1){
          if(chosenWord.indexOf(userGuess)>-1){
          underscore[chosenWord.indexOf(userGuess)]=userGuess;
          console.log(underscore)
          gameBoard.innerHTML=underscore.join(" ")
          }
          if(underscore.join(" ")===chosenWord){
            alert("you win")
            win ++;
            }
          else{
              wrong.push(userGuess)
              // console.log(wrong)
              wrongGuess.innerHTML = wrong.join()
          }
      } 
    }
  

  
    
  
  
  

