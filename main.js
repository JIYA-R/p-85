canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
console.log(e)

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x= 5;
greencar_y= 225;

function add() {
	background_image = new Image();
	background_image.onload = uploadBackground;
	background_image.src = background_image;

	greencar_image = new Image():
	greencar_image.onload = uploadgreencar;
	greencar_image.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image, 0, 0, canvas_width, canvas_height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image, greencar_x, greencar_y, greencar_width ,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
