  var letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // array of words
  var play = [
    "touchdown", "saftey", "punt", "kick-return", "kick-off", "penalty", "punt-return", "field-goal", "tackle", "broken-tackle", "juke", "spin", "truck", "interception", "pass", "run", "pitch", "hurdle"
  ];
  //random word
  var randNum = Math.floor(Math.random() * play.length);
  var chosenWord = play[randNum].toUpperCase();
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
        var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
      //Validate user guess
      if(letters.indexOf(userGuess)){
        console.log("User Guessed: "+ userGuess);
        //Loop to check guess vs. chosen word
        for(var j = 0; j<chosenWord.length; j++){
          if(chosenWord[j]!== userGuess){
          wrong.push(userGuess)
          console.log("these are wrong " + wrong)
          lives--;
          wrongGuess.innerHTML = wrong;
          lives.innerHTML = lives;
          }else{
            underscore[j]=userGuess;
            gameBoard.innerHTML= underscore.join(" ");
          }
        }
      }
      //Invalid Entry
      else {
        alert("Incorrect Entry please enter letter from A-Z")
      };
    };
    if(underscore.join(' ')===chosenWord){
        alert("You Win")
        win++;
      };
    
    
    
// generate game board
document.getElementById("gameBoard").innerHTML = generateUnderscore()

