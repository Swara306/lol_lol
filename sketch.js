var car, wall;
var car2,wall2;
var car3,wall3;
var car4,wall4;
var piki1,piki2,piki3;
var weight,speed;
    
function setup() {
  createCanvas(1600,400);
  
  speed = random (55,90);
  weight= random (400,1500);
  
  car = createSprite (50,45,30,20);
  car.velocityX = speed;
  
  car2 = createSprite (145,45,30,20);
  car2.velocityX = speed;
  
  car3 = createSprite (245,45,30,20);
  car3.velocityX = speed;
  
  car4 = createSprite (345,45,30,20);
  car4.velocityX = speed; 
  
  wall = createSprite (1580,45,20,50);
  
  wall2 = createSprite (1580,145,20,50);
  
  wall3 = createSprite (1580,245,20,50);
  
  wall4 = createSprite (1580,345,20,50);
  
  piki1 = createSprite (0,100,8000,5);
  piki1.shapeColor = "white";
  
  piki2 = createSprite (0,200,8000,5);
  piki2.shapeColor = "white";
  
  piki3 = createSprite (0,300,8000,5);
  piki3.shapeColor = "white";
  
}

function draw() {
  
  background ("pink");
  
  
  if (wall.x-car.x< (car.width+wall.width)/2){
    
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation>180){
      car.shapeColor = color (255,0,0);
    }
    if(deformation<180&&deformation>100){
      car.shapeColor = color (230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color (0,255,0);
    }
    
    
  if (wall.x-car2.x< (car2.width+wall.width)/2){
    
    car2.velocityX=0;
    var deformation1 = 0.5 * weight * speed * speed/22509;
    if (deformation>180){
      car2.shapeColor = color (255,0,0);
    }
    if(deformation1<180&&deformation1>100){
      car2.shapeColor = color (230,230,0);
    }
    if(deformation1<100){
      car2.shapeColor = color (0,255,0);
    }
  }
    
    
  if (wall.x-car3.x< (car3.width+wall.width)/2){
    
    car.velocityX=0;
    var deformation3 = 0.5 * weight * speed * speed/22509;
    if (deformation3>180){
      car3.shapeColor = color (255,0,0);
    }
    if(deformation3<180&&deformation3>100){
      car3.shapeColor = color (230,230,0);
    }
    if(deformation3<100){
      car3.shapeColor = color (0,255,0);
    }
  }
    
    
  if (wall.x-car4.x< (car4.width+wall.width)/2){
    
    car4.velocityX=0;
    var deformation4 = 0.5 * weight * speed * speed/22509;
    if (deformation4>180){
      car4.shapeColor = color (255,0,0);
    }
    if(deformation4<180&&deformation4>100){
      car4.shapeColor = color (230,230,0);
    }
    if(deformation4<100){
      car4.shapeColor = color (0,255,0);
    }
  }
    
    drawSprites ();
      
      }
  
}