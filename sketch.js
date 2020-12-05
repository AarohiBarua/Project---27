
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var chain,ball;

function setup() {
	var canvas = createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	ball = new Ball(600,200,40,40);
	chain = new Chain(pointA);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ball.display();
  chain.display();
  

  
  drawSprites();
 
}



