const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  var ground_options={
  isStatic:true,
  }
ground=Bodies.rectangle(200,390,200,20,ground_options)
World.add(world,ground)

var ball_options={
  restitution:1,
  }
  ball=Bodies.circle(200,100,40,ball_options)
World.add(world,ball)
}

function draw() {
  background(0,0,0);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,40,40)  
  drawSprites();
}