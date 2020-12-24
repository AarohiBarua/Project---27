const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,ball2;
var ground;
var rope1,rope2;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ball1 = new Ball(200,200,80,80);
    ball2 = new Ball(400,200,80,80);
    ground = new Ground(600,600,1200,20);
    rope1 = new Rope(ball1.body,{x:500,y:50});
    rope2 = new Rope(ball2.body,{x:700,y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ground.display();
    rope1.display();
    rope2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
    Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY});
}





 
 