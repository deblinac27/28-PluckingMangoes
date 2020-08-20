
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var tree;
var ground;
var stone;
var girlImg, girl;
var mango1;
function preload(){
  girlImg= loadImage("sprites/girl.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(650, 410, 400, 600);
	ground = new Ground(400, 700, 800, 50);
	stone = new Stone(100, 100, 100, 100);
  slingshot = new Slingshot(stone.body,{x:220, y:510});
  
  mango1 = new Mango(600, 300, 60);
  mango2 = new Mango(650, 250, 60);
  mango3 = new Mango(700, 300, 60);
  mango4 = new Mango(575, 400, 60);
  mango5 = new Mango(530, 320, 60);
  mango6 = new Mango(570, 200, 60);
  mango7 = new Mango(700, 180, 60);
  mango8 = new Mango(770, 300, 60);
  mango9 = new Mango(720, 390, 60);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(181, 224, 255);
  Engine.update(engine);
 
  slingshot.display();    
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.setPosition
stoneBodyPosition=lstone.body.setPosition

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235, y:420})
    slingshot.attach(stone.body);
  }
}
