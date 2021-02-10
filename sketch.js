
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Hammer1,stone1,ground,rubber1
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10
var iron
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world

	//Create the Bodies Here.
Hammer1 = new Hammer(80,90)
stone1 = new Stone(125,190,100,200)
ground=new Ground(200,height,1200,60)
rubber1=new Rubber(500,100,20)
sand1=new Sand(300,100,3)
sand2=new Sand(310,100,3)
sand3=new Sand(320,100,3)
sand4=new Sand(330,100,3)
sand5=new Sand(340,100,3)
sand6=new Sand(350,100,3)
sand6=new Sand(360,100,3)
sand7=new Sand(370,100,3)
sand8=new Sand(380,100,3)
sand9=new Sand(390,100,3)
sand10=new Sand(400,100,3)
iron=new Iron(700,100,50,50)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine)
Hammer1.display()
stone1.display()
ground.display()
rubber1.display()
sand1.display()
sand2.display()
sand3.display()
sand4.display()
sand5.display()
sand6.display()
sand7.display()
sand8.display()
sand9.display()
sand10.display()
iron.display()
}


