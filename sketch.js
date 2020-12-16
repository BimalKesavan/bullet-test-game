var speed, weight, thickness;
var bullet, wall;
var bulletRightEdge
var wallLeftEdge

function setup() {
  createCanvas(1500,400);

  thickness=(22,83);
  speed=random(22,321);
  weight=random(30,52);

  wall=createSprite(1500,200,thickness,height/2);
  bullet=createSprite(0,200,22,10);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  hasCollided();
  drawSprites();
}
function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}