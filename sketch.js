
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var paper,side1,side2,side3;
	var ground;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=createSprite(100,690,20,20);
	paper.shapeColor=("blue");

	side1=createSprite(600,665,10,60);
	//side1.shapeColor("red");

	side2=createSprite(665,695,140,10);
	//side2.shapeColor("red");

	side3=createSprite(735,670,10,69);
    //side3.shapeColor("red");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  bounce();
  drawSprites();
  
}
function bounce(){
if (keyCode === UP_ARROW){
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
}

}