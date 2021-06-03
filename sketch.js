var a,b;
var car, wall;


function setup() {
  createCanvas(800,800);


  a = createSprite(400, 200, 40,  40);
  b = createSprite(200, 200, 50, 50);
  car = createSprite(400, 200, 50,  50);
  wall = createSprite(600, 200, 50, 50);


a.shapeColor = "blue";
b.shapeColor = "lime";
car.shapeColor = "pink";
wall.shapeColor = "brown";


}

function draw() {

  background("lightblue"); 

a.x = World.mouseX
a.y = World.mouseY
  
if (isTouching(a,b)){
  car.velocityX = 4;
}

Boff(car,wall);

  drawSprites();
}

