$(document).ready(function(){
//Random number is chosen at the start of the game
//Random number is set between 19-120
var randomNumber = Math.floor(Math.random() * 101 + 19);    

$("#random-number").text(randomNumber);


//This is going to set up the crystal numbers from 1-12
var jewel1= Math.floor(Math.random()*11+1);
var jewel2= Math.floor(Math.random()*11+1);
var jewel3= Math.floor(Math.random()*11+1);
var jewel4= Math.floor(Math.random()*11+1);

//These variables are used to track, wins, loses, and current score
var currentScore= 0;
var wins= 0;
var losses=0;


$("playerWins").text(wins);
$("playerLosses").text(losses);

//Resetting the game
function reset(){
  Random=Math.floor(Math.random()*101+19);
  $("#random-number").text(randomNumber);
  jewel1= Math.floor(Math.random()*11+1);
  jewel2= Math.floor(Math.random()*11+1);
  jewel3= Math.floor(Math.random()*11+1);
  jewel4= Math.floor(Math.random()*11+1);
  currentScore= 0;
  $("#finalTotal").text(currentScore);
  } 


function winner(){
  alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
  }

//Click functions for jewels

$("#crystal-1").on ("click", function(){
  currentScore = currentScore + jewel1;
  console.log("New currentScore= " + currentScore);
  $('#finalTotal').text(currentScore); 
        //sets win/lose conditions
      if (currentScore == randomNumber){
        winner();
      }
      else if ( currentScore > randomNumber){
        loser();
      }   


      $("#crystal2").on ("click", function(){
        currentScore =  currentScore + jewel2;
        console.log("New  currentScore= " +  currentScore);
        $('#finalTotal').text( currentScore); 
            if ( currentScore == randomNumber){
              winner();
            }
            else if (  currentScore > randomNumber){
              loser();
            } 
      })  


      $("#crystal-3").on ("click", function(){
        currentScore =  currentScore + jewel3;
        console.log("New  currentScore= " +  currentScore);
        $('#finalTotal').text( currentScore);
    //sets win/lose conditions
              if ( currentScore == randomNumber){
              winner();
            }
            else if (  currentScore > randomNumber){
              loser();
            } 
      })  


      $("#crystal-4").on ("click", function(){
         currentScore =  currentScore + jewel4;
        console.log("New  currentScore= " +  currentScore);
        $('#finalTotal').text( currentScore); 
          
              if ( currentScore == randomNumber){
              winner();
            }
            else if (  currentScore > randomNumber){
              loser();
            }
      });   
    }); 






});

