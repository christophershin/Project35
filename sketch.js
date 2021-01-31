var balloon;
var bg;
var database;

function preload(){

bg=loadImage("images/Hot Air Balloon-01.png")
balloon=loadImage("images/Hot Air Balloon-02.png, Hot Air Balloon-03.png, Hot Air Balloon-04.png")
}

function setup() {
database= firebase.database()
database= firebase.database();
console.log(database);
  createCanvas(500,500);



  balloon=createSprite(200,200,20,20)

 
}

function draw() {
  background("background");  

  if (keydown(LEFT_ARROW)){
    balloon.x= balloon.x-10;
  }
  else if(keydown(RIGHT_ARROW)){
    balloon.x= balloon.x+10
  }
  else if(keydown(UP_ARROW)){
    balloon.y= balloon.y-10
  }
  else if(keydown(DOWN_ARROW)){
    balloon.y= balloon.y+10
  }


  drawSprites();
}