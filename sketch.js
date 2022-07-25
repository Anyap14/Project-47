var aircraft1, aircraftImg;
var ufo1, ufo2, ufo3, ufoImg;
var bgImg, bg1;
var missile, missileImg;
var missileGroup;
var blastImg, blast;
var package, packageImg;
var packageGroup;
var asteroid1, asteroid1Img, asteroid2, asteroid2Img;
var heart_1, heart_1Img;
var heart_2, heart_2Img;
var heart_3, heart_3Img;
var score;
var background1, bg1Img1;


function preload(){

aircraftImg = loadImage("assets/aircraft.png");
ufoImg = loadImage("assets/ufo.png");
//bgImg = loadImage("assets/bg.jpeg");
missileImg=loadImage("assets/missile.png");
blastImg=loadImage("assets/blast.png");
packageImg=loadImage("assets/package.png");
asteroid1Img=loadImage("assets/asteroid1.png");
asteroid2Img=loadImage("assets/asteroid2.png");
heart_1Img=loadImage("assets/heart_1.png");
heart_2Img=loadImage("assets/heart_2.png");
heart_3Img=loadImage("assets/heart_3.png");
bg1Img1=loadImage("assets/background1.jpeg")

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //adding the background image
  background1 = createSprite(displayWidth/2-15,displayHeight/2-40,20,20)
background1.addImage(bg1Img1)
background1.scale = 3
//background1.velocityX=-6
background1.x=windowWidth/2

//creating aircraft1 sprite
aircraft1 = createSprite(displayWidth-1100, displayHeight/2-53, 50, 50);
aircraft1.addImage(aircraftImg)
aircraft1.scale = 0.7

   //creating ufo1, ufo2, and ufo3 sprites
   ufo1=createSprite(displayWidth/2+250, displayHeight/2-50, 20, 20)
   ufo1.addImage(ufoImg)
   ufo1.scale=0.4

   ufo2=createSprite(displayWidth/2+490, displayHeight/2-250, 20, 20)
   ufo2.addImage(ufoImg)
   ufo2.scale=0.4

   ufo3=createSprite(displayWidth/2+500, displayHeight/2+165, 20, 20)
   ufo3.addImage(ufoImg)
   ufo3.scale=0.4
 
//creating missile group
missileGroup=new Group()

//asteroid group
asteroidGroup=new Group()

//creating package group
packageGroup=new Group()

//creating asteroid1
asteroid1=createSprite(displayWidth-1200,displayHeight-850, 20, 20)
asteroid1.addImage(asteroid1Img)
asteroid1.scale=0.16

//creating asteroid2
asteroid2=createSprite(displayWidth-1100,displayHeight-845, 20, 20)
asteroid2.addImage(asteroid2Img)
asteroid2.scale=0.3

// creating the hearts
heart_3=createSprite(displayWidth-1340,displayHeight-850, 30, 30)
heart_3.addImage(heart_3Img)
heart_3.scale=0.2

}



function draw() { 
//if(background1.x<-500){
//background1.x=windowWidth
 // }

  //moving the aircraft up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  aircraft1.y = aircraft1.y-20
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 aircraft1.y = aircraft1.y+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  aircraft1.x = aircraft1.x-20
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 aircraft1.x = aircraft1.x+20
}

//creating missile sprite when space bar is pressed
if(keyWentDown("space")){
  missile=createSprite(displayWidth-1100, displayHeight/2-25, 50, 50)
  missile.addImage(missileImg)
  missile.scale=0.04
 missile.velocityX=8
 missileGroup.add(missile)
 }

 if(keyDown("w")){
  missile=createSprite(displayWidth-1100, displayHeight/2-200, 50, 50)
  missile.addImage(missileImg)
  missile.scale=0.04
 missile.velocityX=8
 missileGroup.add(missile)
}
if(keyDown("s")){
  missile=createSprite(displayWidth-1100, displayHeight/2+170, 50, 50)
  missile.addImage(missileImg)
  missile.scale=0.04
 missile.velocityX=8
 missileGroup.add(missile)
}


 //missile when collides with ufo1
 if(ufo1.isTouching(missileGroup)){
  ufo1.destroy()
  missile.velocityX=0
  blast=createSprite(displayWidth/2+250, displayHeight/2-80, 20, 20)
  blast.scale=0.5
 blast.addImage(blastImg)
 }

 //missile when collides with ufo2
 if(ufo2.isTouching(missileGroup)){
  ufo2.destroy()
  missile.velocityX=0
  blast=createSprite(displayWidth/2+550, displayHeight/2-200, 20, 20)
  blast.scale=0.5
 blast.addImage(blastImg)
 }

 //missile when collides with ufo3
 if(ufo3.isTouching(missileGroup)){
  ufo3.destroy()
  missile.velocityX=0
  blast=createSprite(displayWidth/2+558, displayHeight/2+205, 20, 20)
  blast.scale=0.5
 blast.addImage(blastImg)
 }

//when asteroid1 touches aircraft, life decreases


//when asteroid2 touches aircraft, life decreases


//when packages collide with aircraft

spawnAsteroid()

drawSprites();

}

function spawnAsteroid(){

}
