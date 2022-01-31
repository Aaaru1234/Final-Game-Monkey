
var monkeyrun , mokeyrunImg;
var monkeystand , momkeystandImg;
var modiImg
var potholeImg
var Music
var modigrp,potholegrp;

function preload(){
  bgImage = loadImage("bg.jpg");
  monkeyrunImg = loadImage("monkeyrun.png");
  modiImg = loadImage("Modiji.png");
  potholeImg= loadImage("pothole.png");
  music = loadSound("music.mp3");
 
}

function setup(){
  createCanvas(600,1200)
  
bg =createSprite(300,600,600,1200)
bg.addImage("bg",bgImage); 
bg.scale = 3.5
bg.velocityY = 3;

monkeyrun =createSprite(300,500,10,10);
monkeyrun.scale = 0.8
monkeyrun.addImage("monkeyrun",monkeyrunImg);
music.play()
modigrp = new Group();
potholegrp = new Group();
monkeyrun.debug = true;
}

function draw(){
  background("white");
 if(bg.y>500)
 {
  bg.y = bg.height/4
 }
 if(monkeyrun.isTouching(modigrp))
 {
  bg.velocityY += 3;

 }
 if(monkeyrun.isTouching(potholegrp))
 {
   bg.velocityY -= 1;
 }
 monkeyrun.x = mouseX;
  spawnmodi()
  spawnpothole()
drawSprites()
strokeWeight(4)
stroke("green")
fill("blue")
textSize(25)
text("Distance Travelled :" + frameCount,300,100)
}
function spawnmodi(){
if(frameCount%300==0){
modi = createSprite(random(100,500), 0,10,10)
modi.velocityY = 3;
modi.scale = 0.5
modi.addImage("modi",modiImg)
modigrp.add(modi);
modi.debug =true;

}

}
function spawnpothole(){
  if(frameCount%200==0){
  pothole = createSprite(random(200,400), 0,10,10)
  pothole.velocityY = 2;
  pothole.scale = 0.6
  potholegrp.add(pothole)
  pothole.addImage("pot",potholeImg);
  pothole.debug = true;
  pothole.setCollider("rectangle",-190,100,100,100)
  }
  
  }