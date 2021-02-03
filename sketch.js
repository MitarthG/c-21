var a,b
var car,wall;



function setup() {

  createCanvas(1200,400);
  a=createSprite(400, 200, 50, 80);
  b=createSprite(600,200,50,30);
  a.shapeColor="green";
  b.shapeColor="green";

car=createSprite(200,150,50,50);
car.shapeColor="blue";
car.velocityX=4

wall=createSprite(1000,150,50,110);
wall.shapeColor="white"
}

function draw() {
  background("black"); 
  b.x=mouseX;
  b.y=mouseY;
  
if(touch(car,wall))
{
wall.shapeColor="green";

}
//boff();
  drawSprites();
}
