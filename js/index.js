var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square"); 
var pickedColor = pickedColor(); 
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");  


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add intial colors to squares
    squares[i].style.backgroundColor = colors[i]; 
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square    
    var clickedColor = this.style.backgroundColor; 
    //compare color to picked color
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor); 
        h1.style.backgroundColor = pickedColor; 
    } else {
        this.style.backgroundColor = "#232323"; 
        messageDisplay.textContent = "Try Again!"; 
    }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color; 
    }
}

function pickedColor() {
    var random = Math.floor(Math.random() * colors.length); 
    return colors [random]; 
}

function generateRandomColors(num) {
    //create an array
    var array = []; 
    //repeat num times
    for (var i = 0; i < num; i++){
    //add reandom color and push into array
    array.push(randomColor());  
    }
    //return array 
    return array; 
}

function randomColor() {
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 
    //rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}