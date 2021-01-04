
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

	wall1 = new Wall(700, 695, 200, 10);
	wall2 = new Wall(795, 665, 10, 60);
	wall3 = new Wall(605, 665, 10, 60);

	ground = new Wall(400, 705, 1000, 10);

	paper = new Paper(100, 600, 50)

	paperSprite = ellipse(paper.x, paper.y, 50);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);

  Engine.update(engine)

  background(0);
  
  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();
  paper.display();
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:-15,y:15})

	}

}



