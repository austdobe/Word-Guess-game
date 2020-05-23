const allowedLetters = /^[A-Za-z]+$/;
// array of words
const animals = [
  "dog", "cat", "falcon", "eagle", "fish", "shark", "snake", "dolphin", "tiger", "lion", "horse", "zebra", "mouse"
];
//random word
let chosenWord = "";
let underscore = [];
let blanks = 0;
let chosenLetters = [];
//user Guesses
let wrongLetters = [];
//scoreboard
let win = 0;
let losses = 0;
let guess = 9;

let lives = document.getElementById("lives")
let word = document.getElementById('underscore')
let wrong = document.getElementById('wrongGuess')

function startGame(){

  guess = 9;
  underscore = [];
  wrongLetters = [];
  // Calculate random chosenWord
  chosenWord = animals[Math.floor(Math.random() * animals.length)];
  // console.log(chosenWord);
  // split random work into an array of letters
  chosenLetters = chosenWord.split("");
  // console.log(chosenLetters);
  // set blanks to length of letters
  blanks = chosenLetters.length;
  console.log(blanks)
 
  // Push underscore for number of blanks 
  for (let i = 0; i < blanks; i++) {
    underscore.push("  _  ");
    
  }

  console.log(underscore);
  console.log(guess)

  lives.innerHTML = guess;

  word.innerHTML = underscore.join("  ")

  wrong.innerHTML = wrongLetters.join(" ");
}

function checkLetters(letter){

  
    let letterInWord = false;

    for (let i = 0; i < blanks; i++) {
      if (chosenWord[i] === letter)

      letterInWord = true;
      
    }

    if(letterInWord){
      for (let j = 0; j < blanks; j++) {
        if(chosenWord[j]===letter){
          underscore[j] = letter;
        }
      }
      console.log(underscore);
    }else{
      wrongLetters.push(letter);

      guess --;
    }
  
}

function endRound(){
  console.log("Win counter: "+ win + " | Loss counter: "+ losses + " | Guesses: "+ guess);


  document.getElementById("lives").innerHTML = guess;

  document.getElementById("underscore").innerHTML = underscore.join("  ");

  document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");

  if(chosenLetters.toString()=== underscore.toString()){
    win++;

    alert("You Win!!!");

    document.getElementById("wins").innerHTML = win;

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
  if(userGuess.match(allowedLetters)){
      checkLetters(userGuess);
  }else{
    alert("Please choose a letter between a and z")
  }
  endRound();
};
