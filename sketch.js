
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var floor;
var leftwall;
var rightwall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options = {
		restitution: 0.8,
	}

	var floor_options={
		isStatic:true			
	}

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,400,10,ball_options);
	World.add(world,ball);

	floor = Bodies.rectangle(400,650,800,20,floor_options);
    World.add(world,floor);

   rightwall = Bodies.rectangle(700,575,20,130,floor_options);
   World.add(world,rightwall)
   leftwall = Bodies.rectangle(500,575,20,130,floor_options);
   World.add(world,leftwall)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,30);

  rect(floor.position.x,floor.position.y,800,20)
  rect(rightwall.position.x,rightwall.position.y,20,130)
  rect(leftwall.position.x,leftwall.position.y,20,130)

 keyPressed()

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0005,y:0});
    }
}



