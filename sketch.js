// name spacing 

const Engine= Matter.Engine // helps us create Physics Engine
const World= Matter.World  // helps create world following physics rules
const Bodies= Matter.Bodies // helps create objects residing in world 

var engine, world, ground ;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  
  var options= {

    isStatic: true


  }

ground=Bodies.rectangle(200,390,400,20, options);
World.add(world,ground)
console.log(ground)


box1=new Box()
box2=new Box()

}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect( ground.position.x,ground.position.y,400,50)

  box1.display();
  box2.display();
}

