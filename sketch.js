var player1,player2;
var backgroundImage;
var invisibleground;
var p1Image,p1Image2,p1Image3,p1Image4;
var p2Image;
var treximg;

function preload(){

  p1Image=loadImage('images/2.png');
  p1Image2=loadImage('images/3.png');
  p1Image3=loadAnimation('images/4.png');
  p1Image4=loadAnimation('images/5.png');

  treximg=loadImage('images/trex 2.png');

  p2Image=loadImage('images/6.png');
  backgroundImage=loadImage('images/background.png');

}

function setup(){
  canvas = createCanvas(1500,600);
  player1=createSprite(100,580,20,60);
  player1.addImage(p1Image);
  player1.addAnimation(p1Image2);
  player1.scale=0.5;


  player2=createSprite(1000,580,20,60);
  player2.addImage(p2Image);
  player2.scale=0.5;
  invisibleground=createSprite(1000,580,2600,20);
  invisibleground.visible=false;

  

  
  
}

function draw(){
  background(backgroundImage);
  player1.collide(invisibleground);
  player2.collide(invisibleground);
  spawnTrex();

 


  drawSprites();
}
function spawnTrex(){
  var rand= Math.round(random(100,1000))
  console.log(rand);
  if(frameCount%rand===0){
    var trex;
    trex=createSprite(0,530,10,50);
    trex.velocityX=2;
    trex.addImage(treximg);
    trex.scale=0.3;
 

    
  }
}
function spawnTrex(){
  var rand= Math.round(random(100,1000))
  console.log(rand);
  if(frameCount%rand===0){
    var trex;
    trex=createSprite(0,530,10,50);
    trex.velocityX=2;
    trex.addImage(treximg);
    trex.scale=0.3;
 

    
  }
}


