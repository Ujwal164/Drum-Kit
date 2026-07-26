var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern= [];
var userClickedPattern= [];

var started = false;
var level = 0;


$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        gameSequence();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function gameSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){ //here we are checking if the user has finished their sequence and if it matches the game pattern if not then we will wait for the user to click the next button and check again
            setTimeout(function(){
                gameSequence();
            }, 1000);
            userClickedPattern = [];
            level++;
            $("#level-title").text("Level "+level);
            
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");    
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 1000);
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    $("#level-title").text("Game Over, Press Any Key to Restart");
}