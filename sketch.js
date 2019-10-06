
let x_position = 198
let y_position = 117
let a = 1
let x_direction = 'left'
let y_direction = 'down'
let speed = 2
let diameter = 75
let theta = 0
let b = 0


function setup(){

createCanvas(900,900, WEBGL)


}
function draw(){

  // rotateX(frameCount * 0.000000000000000001);
  // rotateY(frameCount * 0.1);
  // sphere(1000);


	// createCanvas(random(0, 900),random(0, 900))

background(20)

	// background(random(0, 200))

 	strokeWeight(x_position/y_position)
	stroke(90, y_position/3.6, 98)
	 rotateY(frameCount * (y_position/x_position)/y_position);
  rotateZ(frameCount * (x_position/y_position)/x_position);
  	fill(90)
cone(x_position-y_position , y_position, diameter, diameter)
fill(x_position/255)
ellipsoid(x_position , y_position-x_position, diameter, diameter)
fill(9)
arc(15, x_position, x_position - y_position, 90, 0, 270)
ellipse(x_position, y_position, diameter, diameter)
box(400 , x_position, 90, diameter)


let n = ['right', 'left']
let m = ['up', 'down']
let z = random(n)
let v = random(m)

if(x_direction == 'right'){

		x_position += speed
}

if(x_direction == 'left'){

	x_position -= speed
}

if(y_direction == "up"){
	y_position -= speed
}

if(y_direction == "down"){
	y_position += speed
}


if(x_position >= width - diameter/9){
	x_direction = 'left'
	y_direction = v

}

if(x_position <= 0 + diameter/9){
	x_direction = 'right'
	y_direction = v
}

if(y_position >= height - diameter/9){
	y_direction = 'up'
	x_direction = z

}

if(y_position <= 0 + diameter/9){
	y_direction = 'down'
	x_direction = z

}

let u = ['wow', 'nice', 'is', 'so', 'great', 'to', 'meet', 'you', 'boi', 'i', 'wonder', 'brian', 'will', 'actually', 'read', 'all',' of', 'this',
'if', 'he', 'did', 'that', 'would', 'be', 'pretty','crazy', 'lol', 'haha','jk','this','is', 'a', 'banksy']

let t = random(u)
if(t == 'wow'){
	x_direction = z
	y_direction = v
	x_position = random(0, (width)-(diameter/9))
	y_position = random(0, (height) - (diameter/9))
}

push()
	noFill()
	strokeWeight(1)
	stroke(1)
	rect(0, 0, width, height)
pop()

}


function mouseClicked(){

	print(int(mouseX), int(mouseY))
}
