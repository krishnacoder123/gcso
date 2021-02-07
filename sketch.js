var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, 60, 200);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50)
  car.velocityX = 3;
}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
    car.velocityX=0;
    var Df=0.5*weight*weight*speed/22500;
    if(Df <100 ){
      car.shapeColor= "green"
    }
    else if(Df>100 &&Df <180){
      car.shapeColor= "yellow"
    }
   else{
    car.shapeColor= "red"
   }
  }
  drawSprites();
}