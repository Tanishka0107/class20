var fixed, moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.shapeColor = "blue";

moving = createSprite(400, 200, 100, 50);
moving.shapeColor = "blue";
}
function draw() {
  background(255,25,250);
  moving.x = mouseX;
  moving.y = mouseY;  

  if(moving.x - fixed.x < fixed.width/2+moving.width/2&&
    fixed.x - moving.x < fixed.width/2+moving.width/2&&
    moving.y - fixed.y < fixed.height/2+moving.height/2&&
    fixed.y - moving.y < fixed.height/2+moving.height/2) {
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{

  moving.shapeColor = "blue";
  fixed.shapeColor = "blue";
  }
  drawSprites();
}