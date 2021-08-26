const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let world;
let engine;

var ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  button = createButton("Click to Blow");
  button.position(500, 330);
  button.class("blowButton");
  button.size(150, 40);
  button.mousePressed(blow);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(440, 160, 50);
  blower = new Rect(440, 250, 120, 120);
  blowerPipe = new Rect(280, 280, 200, 30);
  ground = new Rect(400, 395, 800, 10);
  
}

function draw() { 
  background(0,203,255);  
  Engine.update(engine);
  ball.reveal();
  blower.reveal();
  blowerPipe.reveal();
  ground.reveal();
  //drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.2});
}