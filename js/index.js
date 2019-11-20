var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square"); 
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");  
var resetButton = document.querySelector("#reset"); 
var easyBtn = document.getElementById("easyBtn"); 
var hardBtn = document.getElementById("hardBtn"); 

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor; 
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
}}) 

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new color from array 
    pickedColor = pickColor(); 
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor; 
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
    //change colors of squares
    squares[i].style.backgroundColor = colors[i]; 
    }
    h1.style.backgroundColor = "#232323";
 })

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add intial colors to squares
    squares[i].style.backgroundColor = colors[i]; 
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square    
    var clickedColor = this.style.backgroundColor; 
    //compare color to picked color
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor); 
        h1.style.backgroundColor = pickedColor; 
        resetButton.textContent = "Play Again?";
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

function pickColor() {
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

