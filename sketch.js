var garden,rabbit;
var gardenImg,rabbitImg;

var select_sprites =Math.round(random(3,4));

if (framecount  % 60  === 0) {
  if (select_sprites == 1) {
    
  }
}

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
    
    
    

}

function setup(){
  
  createCanvas(400,400)

  //creating apple
  function createApples(){
    apple.scale = 0.4;
  apple=createSprite(random(20,50)30,10,10)
  apple.addImage("appleImg")
  apple.velocityY=20;
  }
  
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}