var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  
 // movingRect = createSprite(200,50,50,50);
 // fixedRect = createSprite(200,200,50,50);
 //ob1 = createSprite(300,100,50,50);
 //ob2 = createSprite(100,300,50,50);
  speed = random(230,320);
  weight = random(30,50);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,20);
  wall  = createSprite(1200,200,thickness,height/2);

  /*ob1.velocityX = -4;
  ob2.velocityX =  4;
  ob1.velocityY =  4;
  ob2.velocityY = -4;*/
  bullet.velocityX = speed;

   
}
 
function draw() {
  background(0);
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY; 
  
  //ob2.x = World.mouseX;
  //ob2.y = World.mouseY;

 /* if(isTouching(ob1,movingRect)) {
    ob1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    ob1.shapeColor = "grey";
    movingRect.shapeColor = "grey";
  }*/
  //bounceOff(ob1,ob2);
  if(bullet.x+bullet.width >= wall.x)
  {
    bullet.velocityX = 0;
    //speed = 0;
    
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage > 10){
    wall.shapeColor = color(255,0,0);
   }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
};
