var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(400, 100, 50, 80);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.debug = true;
  fixedRectangle.velocityY = 5;

  movingRectangle = createSprite(400,800,80,30);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;
  movingRectangle.velocityY = -5;
}

function draw() {
  background(0);
  bounceOff(movingRectangle,fixedRectangle);  
  drawSprites();
}
