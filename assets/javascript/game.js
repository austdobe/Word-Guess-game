// var letters = [/a-z/i];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// array of words
var animals = [
  "dog", "cat", "parrot", "falcon", "eagle", "fish", "shark", "aligator", "turtle", "snake", "dolphin", "tiger", "lion", "horse", "zebra", "elephant", "mouse", "squirrle"
];
//random word
var chosenWord = "";
var underscore = [];
var blanks = 0;
var chosenLetters = [];
//user Guesses
var wrongLetters = [];

//scoreboard
var win = 0;
var losses = 0;
var guess = 9;

function startGame(){

  guess = 9;

  chosenWord = animals[Math.floor(Math.random() * animals.length)];

  chosenLetters = chosenWord.split("");
  console.log(chosenLetters);
  blanks = chosenLetters.length;

  console.log(chosenWord);

  underscore = [];

  wrongGuess = [];

  for (var i = 0; i < blanks; i++) {
    underscore.push("_");
    
  }

  console.log(underscore);

  document.getElementById("lives").innerHTML = guess;

  document.getElementById("underscore").innerHTML = underscore.join(" ");

  document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
}

function checkLetters(letter){

  var letterInWord = false;

  for (var i = 0; i < blanks; i++) {
    if (chosenWord[i] === letter)

    letterInWord = true;
    
  }

  if(letterInWord){
    for (var j = 0; j < blanks; j++) {
      if(chosenWord[j]===letter){
        underscore[j] = letter;
      }
    }
    console.log(underscore);
  }else{
    wrongGuesses.push(letter);

    guess --;
  }
}

function endRound(){
  console.log("Win Counter: "+win + " | Loss counter: "+ loses + " | Guesses: "+ guess);


  document.getElementById("lives").innerHTML = guess;

  document.getElementById("gameBoard").innerHTML = underscore.join(" ");

  document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");

  if(chosenLetters.toString()=== underscore.toString()){
    win++;

    alert("You Win!!!");

    document.getElementById("wins").innerHTML = wins;

    startGame();
  } else if(guess === 0){
    losses++;
    alert("You lose");

    document.getElementById("losses").innerHTML = losses;

    startGame();
  }
}

startGame();

document.onkeyup = function(event){

  userGuess = String.fromCharCode(event.which).toLowerCase();

  checkLetters(userGuess);

  endRound();
};



// function GenerateUnderScore(){
// for(var i = 0; i <  chosenWord.length; i++){
//       underscore[i]="  __  ";
//   }
// console.log(underscore)
// // generate game board
// gameBoard.innerHTML = underscore.join("  ")
// }
// GenerateUnderScore();
// document.getElementsByClassName("live").innerHTML=guess;
//     //capture user guess
// document.onkeypress = function validateGuess(event){ 
//   userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//   //Validate user guess
//   if(letters.indexOf(userGuess)>-1){
//       checkGuess();
//       checkScore();
//       }
//   else{
//       wrong.push(userGuess);
//       console.log(wrong);
//       document.getElementsByClassName("wrongGuess").innerHTML = wrong.join();
//       }
//   };
//   function checkGuess(){
//     for(var j=i; j<chosenWord.length; j++){
//       underscore[j]=userGuess;
    
//   }
//   }
//   function checkScore(){
//     if(underscore===chosenWord){
//       alert("you win")
//       win ++;
//         }
//   }


