const allowedLetters = /^[A-Za-z]+$/;
// array of words
const animals = ["bear", "dog", "cat", "falcon", "eagle", "fish", "shark", "snake", "dolphin", "tiger", "lion", "horse", "zebra", "mouse", "elephant", "camel", "monkey", "fox", "alligator", "antelope", "flamingo", "beaver"];
//random word
let chosenWord = "";
let underscore = [];
let blanks = 0;
let chosenLetters = [];
//user Guesses
let wrongLetters = [];
let guessedLetter = [];
//scoreboard
let win = 0;
let losses = 0;
let guess = 9;
//prepare HTML modifications
let lives = document.getElementById("lives")
let word = document.getElementById('underscore')
let wrong = document.getElementById('wrongGuess')

function startGame(){
  //reset game arrays and guesses
  guess = 9;
  underscore = [ ];
  wrongLetters = [ ];
  guessedLetter = [ ];
  // console.log("This is Guessed Letter Reset "+ guessedLetter)

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
  // console.log(underscore);
  // console.log(guess)
  //modify HTML to show current game standings
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
    alert("Sorry the correct word was " + chosenWord + ". Try again!");

    document.getElementById("losses").innerHTML = losses;

    startGame();
  }
}

startGame();

document.onkeyup = function(event){
  userGuess = String.fromCharCode(event.which).toLowerCase();
  
    // Removes any button strike that is not a letter, space bar, delete, numbers, ect. 
    if(userGuess.match(allowedLetters)){
      // checks if the letter was already guessed
      if(guessedLetter.includes(userGuess)=== false){
        //runs letter stroke through a function to check if in chosen word.
        checkLetters(userGuess);
        // pushes letter into an array of guessed letters. This array is used to prevent duplicate loss of lives with same letter.
        guessedLetter.push(userGuess)
        // console.log("This is guessed Letter after Push " + guessedLetter)
      } else{
        alert("You already chose " + userGuess + ". Please try another letter between A and Z")
      }
    }
    else{
      alert("Please choose a letter between A and Z")
    }
 
  
  endRound();
};
