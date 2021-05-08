var box;
var canvas;
var music;
var blue;
var green;
var pink;
var yellow;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,500);
    
    box = createSprite(random(50,400));
    box.shapeColor = "white";
    box.height = 20;
    box.width = 20;
    box.velocityY = 5;
    
    blue = createSprite(50,490,90,20);
    blue.shapeColor = "blue";

    pink = createSprite(149,490,90,20);
    pink.shapeColor = "pink";

    yellow = createSprite(249,490,90,20);
    yellow.shapeColor = "yellow";
    
    green = createSprite(347,490,90,20);
    green.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));
  
if(isTouching(box,green)){
    box.velocityY = 0;
    box.shapeColor = "green";
   // music.playSound();
}

if(isTouching(box,blue)){
    box.velocityY = 0;
    box.shapeColor = "blue";
  //  music.playSound();
}
if(isTouching(box,pink)){
    box.velocityY = 0;
    box.shapeColor = "pink";
    //music.playSound();
}
if(isTouching(box,yellow)){
    box.velocityY = 0;
    box.shapeColor = "yellow";
   // music.playSound();
}


drawSprites();    
}
