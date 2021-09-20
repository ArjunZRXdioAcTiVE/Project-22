const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

let engine, world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(380,100,230,20,roof_options);
    World.add(world,roof);
	console.log ("roof : 285 - 515 (xP)");

	// bobs
	bob1 = Bodies.circle (327.5, 300, 12.5);
	World.add (world, bob1); 

	bob2 = Bodies.circle (352.5, 300, 12.5);
	World.add (world, bob2);

	bob3 = Bodies.circle (377.5, 300, 12.5);
	World.add (world, bob3);

	bob4 = Bodies.circle (402.5, 300, 12.5);
	World.add (world, bob4);

	bob5 = Bodies.circle (427.5, 300, 12.5);
	World.add (world, bob5);

	rope1 = new Rope (327.5, 100, 0.1, 200, bob1);
	rope2 = new Rope (352.5, 100, 0.1, 200, bob2);
	rope3 = new Rope (377.5, 100, 0.1, 200, bob3);
	rope4 = new Rope (402.5, 100, 0.1, 200, bob4); 
	rope5 = new Rope (427.5, 100, 0.1, 200, bob5); 

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background("#99004d");

	rect(roof.position.x,roof.position.y,230,20);

	//call display() to show ropes here
	rope1.display (); 
	rope2.display ();
	rope3.display (); 
	rope4.display ();
	rope5.display ();
  
	//create ellipse shape for multiple bobs here
	ellipse (bob1.position.x, bob1.position.y, 25);
	ellipse (bob2.position.x, bob2.position.y, 25);
	ellipse (bob3.position.x, bob3.position.y, 25);
	ellipse (bob4.position.x, bob4.position.y, 25);
	ellipse (bob5.position.x, bob5.position.y, 25);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed () {
	if (keyCode === RIGHT_ARROW) {
		Body.applyForce (bob1, {x: 0, y: 0}, {x: -0.02, y:0});
	}
}
