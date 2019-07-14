  var letters = [
      "a", "b",  "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  // array of words
  var play = [
    "touchdown", "saftey", "punt", "kick return", "kick off", "penalty", "punt return", "field goal", "tackle", "broken tackle", "juke", "spin", "truck", "interception", "pass", "run", "pitch", "hurdle"
  ];
  //random word
  var randNum = Math.floor(Math.random() * play.length);
  var right = [];
  var wrong = [];
  var chosenWord = play[randNum];
  var underscore = [];
  //DOM manipulation
  var hangWord = document.getElementsByClassName("underscore");
  var wrongGuess= document.getElementsByClassName("wrongGuess")
  var correctGuess = document.getElementsByClassName("correctGuess")
  //scoreboard
  var win = 0;
  var loses = 0;
  var lives = 10;
  //create underscore based on random word
  console.log(chosenWord)
  var generateUnderscore = ()=>{
    for(var i = 0; i <  chosenWord.length; i++){
      underscore.push("_");
    }
    return underscore;
  }

  console.log(generateUnderscore());
  //capture user guess
    document.onkeypress = function(event){ 
      var userGuess = String.fromCharCode(event.keyCode);
      console.log (userGuess)
      //User guess is right
      if(chosenWord.indexOf(userGuess) > -1){
        right.push(userGuess);
        //swaps out underscore for user guess
        underscore[chosenWord.indexOf(userGuess)] = userGuess;
        //add guess to correct answer box
        
        correctGuess[0].append(userGuess)
        //combines user guess to string
        if(underscore.join(' ')===chosenWord){
          alert("You Win!")
          win++;
        }
      }else{
        //move guess to incorrect box and remove live.
        wrong.push(userGuess);
        wrongGuess[0].append(userGuess)
        lives--;
      }
      
    };

  
