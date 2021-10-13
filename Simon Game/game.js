let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let buttons = $(".btn");
let userClickedPattern = [];
let gameStarted = false;
let level = 0;
let title = $("#level-title");

// this function is responsible for generating random next color
function nextSequence(){
  //userClickPattern is to store what the user has clicked in order
  userClickedPattern = [];

  //level is incremented every time nextSequence is called
  level++;

  //randomNumber is used to generate number from 0 - 3 to loop through buttonColors array
  let randomNumber = Math.floor(Math.random() * 4);

  // loop through buttonColors array
  let randomChosenColour = buttonColors[randomNumber];

  // once random color has been chosen, push it at the end of the gamePattern array
  gamePattern.push(randomChosenColour);

  // animate fadeIn and fadeOut for random color
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  // play sound depending on what color was chosen
  playSound(randomChosenColour);

  // update level number each time this function is called
  title.text("Level " + level);
}

// this function is responsible for playing sound
function playSound(color){
  // play sound depending on the name that will be passed
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

// this function is responsible for storing what the user has clicked
buttons.click(function(){
  // declared variable to find what user has clicked
  let userChosenColour = $(this).attr("id");

  // then, push this variable to the userClickedPattern at the end of the array
  userClickedPattern.push(userChosenColour);

  // call playSound function depending on what user has clicked
  playSound(userChosenColour);

  // call animate press function
  animatePress(userChosenColour);

  // check if what user has clicked matches the gamePattern array
  checkAnswer(userClickedPattern.length-1);
});

// this function is responsible for animating presses
function animatePress(currentColor){
  // declare variable for what user clicked
  let col = $("#" + currentColor);

  // add a class "pressed"
  col.addClass("pressed");

  // remove class "pressed after 100ms"
  setTimeout(function(){
    col.removeClass("pressed");
  }, 100);
}


$(document).keypress(function(e){
  // check if games has NOT started and button "a" was pressed
  // added option to start game by clicking title for mobile
  if(!gameStarted && e.key == "a"){
    startGame();
  }
});

// this function is responsible for starting the game using title
title.click(function(){
  startGame();
});

// this function is responsible for starting the game
function startGame(){
  gameStarted = true;
  nextSequence();
}

// this function is responsible for checking every user's click event
function checkAnswer(currentLevel){
  // check if the last item that user clicked matches the last item in gamePattern array
  // also checks 'current' item that was clicked
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

    // check if userClickPattern and gamePattern arrays match
    // also checks if the last item has now been clicked before running next sequence
    if(userClickedPattern.length === gamePattern.length){

      // allow 1 second delay before genarting next Sequence
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else {
    // play sound "wrong" if user clicks wrong button
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();

    // changes the background
    $("body").addClass("game-over");

    // removes game-over background after 200ms
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    title.text("Game Over, Press Any Key or click me to Restart");

    // calls startOver function to clear level, gamePattern and gameStarted
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
