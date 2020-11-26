var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".col");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor
        //update page to reflect changes
        // if(this.textContent==="Easy"){
        // 	numSquares = 3;
        // }
        // else{
        // 	numSquares = 6;
        // }
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; 
        reset();
	});
}

function reset(){
	//generate all new random colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change the display color to match the picked color
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
    resetButton.textContent ="New Colors";
	//change the color of all squares
    for(var i=0; i< squares.length; i++){
    	if(colors[i]){
    		squares[i].style.display = "block";
	        squares[i].style.backgroundColor= colors[i];
        }
        else{
        	squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click",function(){
	reset();
});


// resetButton.addEventListener("click",function(){
// 	//generate all new random colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from the array
// 	pickedColor = pickColor();
// 	//change the display color to match the picked color
// 	colorDisplay.textContent = pickedColor;
// 	message.textContent = "";
//     this.textContent ="New Colors";
// 	//change the color of all squares
//     for(var i=0; i< squares.length; i++){
// 	    squares[i].style.backgroundColor= colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
// });

// easy.addEventListener("click",function(){
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//    	pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i< squares.length; i++){
//     	if(colors[i]){
//     	    squares[i].style.backgroundColor= colors[i];
//     	}
//     	else{
//     		squares[i].style.display= "none";
//     	}
//     }
// });

// hard.addEventListener("click",function(){
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     numSquares=6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i< squares.length; i++){
//     	    squares[i].style.backgroundColor= colors[i];
//     		squares[i].style.display= "block";
//     }
    
// });

colorDisplay.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
	//add initial color to squares
	squares[i].style.backgroundColor= colors[i];
    //add click events
    squares[i].addEventListener("click", function(){
    //grab the color of the clicked square
    var clickedColor= this.style.backgroundColor;
    //compare color to pickedcolor
    if(clickedColor===pickedColor){
    	message.textContent = "Correct!";
    	resetButton.textContent= "Play Again?";
    	changeColor(clickedColor);
        h1.style.backgroundColor = pickedColor;
    }
    else{
    	this.style.backgroundColor="#232323";
    	message.textContent = "Try Again";   
    }
});

}

function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	//pick a random number from the colors array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//to repeat num times
	for (var i=0; i<num; i++)
	//get random colors and push into array
	arr.push(randomColor())	
	//return the array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")"; 
}