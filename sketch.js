const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var engine,world
var ground
var ball


function setup() {
  createCanvas(800,600);
  
  engine=Engine.create()
  world=engine.world

  var groundOptions={
    isStatic:true
  }
  
  ground=Bodies.rectangle(400,590,800,30,groundOptions)
  World.add(world,ground)

  var ballOptions={
    restitution:1.0
  }


  ball=Bodies.circle(400,100,50,ballOptions)
  World.add(world,ball)




}

function draw() {
  background(0,0,0);
  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,30)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,70,70)



  drawSprites();
}