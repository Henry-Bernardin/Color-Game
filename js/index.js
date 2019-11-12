var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square"); 
var pickedColor = colors[3]; 
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.getElementById("message"); 

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // Add intial colors to squares
    squares[i].style.backgroundColor = colors[i]; 
    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
    //Grab color of clicked square    
    var clickedColor = this.style.backgroundColor; 
    //Compare color to picked color
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
    } else {
        this.style.backgroundColor = "#232323"; 
        messageDisplay.textContent = "Try Again!"; 
    }
    });
}