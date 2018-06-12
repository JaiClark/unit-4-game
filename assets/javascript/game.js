//game generates a random number
$(document).ready(function(){

    $("#random-button").on("click", function(){
    var randomNumber = Math.floor((Math.random() * 120) + 19);
    $("#random-number").text(randomNumber);
  });

    //number will change each time the game is loaded

//player presses a random crystal
$("#crystal-button").on("click", function(){
    
    //after the button is pressed a random number will be shown in the score
    var randomNumber = Math.floor((Math.random() * 12) + 1);
    $("#crystal-number").text(randomNumber);
  });

  $("#crystal-button2").on("click", function(){
    
    //after the button is pressed a random number will be shown in the score
    var randomNumber = Math.floor((Math.random() * 12) + 1);
    $("#crystal-number").text(randomNumber);
  });

  $("#crystal-button3").on("click", function(){
    
    //after the button is pressed a random number will be shown in the score
    var randomNumber = Math.floor((Math.random() * 12) + 1);
    $("#crystal-number").text(randomNumber);
  });

  $("#crystal-button4").on("click", function(){
    
    //after the button is pressed a random number will be shown in the score
    var randomNumber = Math.floor((Math.random() * 12) + 1);
    $("#crystal-number").text(randomNumber);
  });
    //the next number will be pressed
    //the numbers are added together
    //the value of all the numbers are displayed in the score
    //player selects numbers until meeting the win/lose conditions

//if the player matches the random number, they win
    //if the player goes above the random number they lose
    //if the player is under the chosen number keep playing

//if player wins add point to wins column
    //if player loses add point to loses column

//game resets after a win or lose is added to either column




});

