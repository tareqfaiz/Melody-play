
//DETECTING BUTTON PRESS

var numberOfDrums = document.querySelectorAll(".drum").length;

var drums = document.querySelectorAll(".drum");

for (var i=0; i<numberOfDrums; i++) 
{
   drums[i].addEventListener("click", function() {

   var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);
   
});
}



//DETECTING KEYBOARD PRESS

document.addEventListener ("keypress", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});


function makeSound(key){
   switch (key) {
      case "t":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();   
         break;

      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

      case "r":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;

      case "e":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

      case "q":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;

      case "f":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;

      case "i":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;
      
   
      default: console.log (key);
   
   }

}


function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);
   if (activeButton) {
      activeButton.classList.add("pressed");
      setTimeout(function() {
      activeButton.classList.remove("pressed");
      }, 100);
   }
}


//JQUERY
$("button").click(function(){
   $("h1").css("color", "yellow");

// Get the current screen width
var screenWidth = $(window).width();

// Set font size based on screen width
if (screenWidth < 500) {
 $("h1").css("font-size", "4rem"); // Smaller font size for small screens
} else {
 $("h1").css("font-size", "8rem"); // Larger font size for larger screens
}
});

$(document).keypress(function(event){
   $("h1").text(event.key).slideToggle();
});

$("h1").on("mouseover", function() {
   $("h1").css("color", "purple");
});
