const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var r = 50;
var bobX = 400;
var bobY = 350;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1 = new Bob(bobX,bobY,r);
	bob2 = new Bob((r*2)+bobX,bobY,r);
	bob3 = new Bob((r*4)+bobX,bobY,r);
	bob4 = new Bob(bobX-(r*2),bobY,r);
	bob5 = new Bob(bobX-(r*4),bobY,r);

	ground = new Ground(((r*2)*5/2)+(bob5.body.position.x-r),200,(r*2)*5,50);


	chain1 = new Chain(bob1.body,ground.body,0,0);
	chain2 = new Chain(bob2.body,ground.body,(r*2),0);
	chain3 = new Chain(bob3.body,ground.body,(r*4),0);
	chain4 = new Chain(bob4.body,ground.body,-(r*2),0);
	chain5 = new Chain(bob5.body,ground.body,-(r*4),0);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,100,200);
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();

  if(keyDown('UP_ARROW')){
	Body.applyForce(bob5.body,bob5.body.position,{x:-30,y:30})
  }
  
 
}



