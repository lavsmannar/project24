
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer();

	rubber=new Rubber();

	stone=new Stone();

	var groundOptions={
		isStatic:true
	}
	
	var ground=Bodies.rectangle(400,690,800,20,groundOptions);

	Engine.run(engine);
}


function draw() {
  	rectMode(CENTER);
	background(255);
	
	hammer.position.x=mouseX;
	hammer.position.y=mouseY;

	hammer.display();
	rubber.display();
	stone.display();

	Engine.update(engine);
}



