  var letters = [/a-z/];
  // array of words
  var animals = [
    "dog", "cat", "parrot", "falcon", "eagle", "fish", "shark", "aligator", "turtle", "snake", "dolphin", "tiger", "lion", "horse", "zebra", "elephant", "mouse", "squirrle"
  ];
  //random word
  var randNum = Math.floor(Math.random() * animals.length);
  var chosenWord = animals[randNum];
  var underscore = [];
  //user Guesses
  var right = [];
  var wrong = [];
  //DOM manipulation
  var gameBoard = document.getElementById("gameBoard")
  var wrongGuess= document.getElementsByClassName("wrongGuess");
  var restart=document.getElementById("restart");
  var lives = document.getElementsByClassName("lives")
  //scoreboard
  var win = 0;
  var loses = 0;
  var lives = 10;
  var lettersLeft=underscore.length
  //create underscore based on random word
  console.log(chosenWord)
    var generateUnderscore = ()=>{
      for(var i = 0; i <  chosenWord.length; i++){
        if(chosenWord[i]===("-")){
          underscore.push(" - ")
        }else{
          underscore.push(" _ ");
        }
      }
      return underscore.join(" ");
    }
    //capture user guess
    document.onkeypress = function(event){ 
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      //Validate user guess
      if(letters.indexOf(userGuess)){
        console.log("User Guessed: "+ userGuess);
        //Loop to check guess vs. chosen word
        for(var j = 0; j<chosenWord.length; j++){
          if(chosenWord[j]!== userGuess){
            wrong.push(userGuess)
            console.log("these are wrong " + wrong)
            lives--;

          }else{
              underscore[j]== userGuess;
              gameBoard.innerHTML= underscore.join(" ");
              lettersLeft --;
              if(lettersLeft===0){
                alert("You Win")
                win++;
            }
          } 
          
        }
      }
      //Invalid Entry
      else {
        alert("Incorrect Entry please enter letter from A-Z")
      };
    };
   
    
    
    
// generate game board
document.getElementById("gameBoard").innerHTML = generateUnderscore()

