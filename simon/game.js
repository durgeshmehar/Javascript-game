var gameStart = new Audio("audio/game start.mp3");
gameStart.play();

var level =0;
var  buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern =[];
var userClickPattern=[];

var keyPress =1;
$(document).keypress(function(event){ 
    if(keyPress ===1){
      $("level-title").text("Level "+level);
       setTimeout(function() {nextSequence();},500);
    }
    keyPress = keyPress -1;
});


$(".btn").click( function(event){
    if( keyPress !== 1){
        var userClick =event.target.id;
        animateButton( userClick);
        makeSound( userClick);
        userClickPattern.push(userClick);
        console.log("User :-"+userClickPattern);
        checkAns( userClickPattern.length -1);
    
    }
  
   })


function checkAns(len){
    if( userClickPattern[len] === gamePattern[len]){
        if( userClickPattern.length === gamePattern.length){

            setTimeout( function() {nextSequence();} ,2000);
        }
    }
    else{
        makeSound("game end");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function (){
            $("body").removeClass("game-over");
          }, 100);
          startOver();
    }
}
function nextSequence(){
    userClickPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNum = Math.floor( Math.random()*4) ;
    var randomChosenColour =buttonColours[randomNum] ;
    animateButton(randomChosenColour);
    makeSound( randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log("Computer :-"+gamePattern);
}

function animateButton(randomChosenColour ){
    $("."+randomChosenColour).fadeOut(150).fadeIn(150) ;
   
}
function makeSound(randomChosenColour){
    var audio =new Audio("audio/"+randomChosenColour+".mp3");
    audio.play();
}
function startOver(){
    level=0;
    keyPress =1;
    gamePattern =[];
    userClickPattern=[];
}


