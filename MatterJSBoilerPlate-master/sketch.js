
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	leftBody=createSprite(300,610,20,100);
rightBody=createSprite(490,610,20,100);
bottomBody=createSprite(400,655,200,20);
leftBody.shapeColor=color(255,0,0);
rightBody.shapeColor=color(255,0,0);
bottomBody.shapeColor=color(255,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		
	}
		
		


}

