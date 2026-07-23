//detecting mouse click 
var button = document.querySelectorAll(".drum");

for(var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", handleClick);
}

function handleClick(event) {
    var buttonInnerHTML = this.innerHTML;
    Sound(buttonInnerHTML);
    // this is a js special keyword which refers to the button that was clicked, so we are getting the innerHTML of the button that was clicked and passing it to the Sound function to play the sound according to the button clicked
    
    Animation(buttonInnerHTML);// here we are passing the buttonInnerHTML to the Animation function to show the animation effect when the button is clicked
}

//detecting keyboard press

document.addEventListener("keydown", function(event) {
    Sound(event.key);

    Animation(event.key);// here we are passing the event.key to the Animation function to show the animation effect when the key is pressed
});

//detected key is passed to the function and the sound is played according to the key pressed

function Sound(key) {

     switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break; 
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  
        case "s":  
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;  
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();   
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  

        default: console.log(key);
    }   
     
}
// this for key animation 
function Animation(currentKey) {
    var activeButton = document.querySelector("."+ currentKey);// here we are selecting the button with the class of the current key pressed and adding a class to it to show the animation effect
// . is the class selector in CSS, so we are selecting the button with the class of the current key pressed and adding a class to it to show the animation effect, curentKey is the key pressed by the user and we are using it to select the button with the class of the current key pressed and adding a class to it to show the animation effect
    activeButton.classList.add("pressed");
    //pressed is the class created in the CSS file to show the animation effect when the button is clicked or key is pressed

    setTimeout(function() {
        activeButton.classList.remove("pressed");// here we are removing the class after 100 milliseconds to show the animation effect
    }, 100);
}