const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var bg;
var towerImg;
var cannon;
var cannonball;
var angle;

function preload() {
 bg=loadImage("assets/background.gif");
 towerImg=loadImage("assets/tower.png");

  
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  options={
    isStatic:true

  }
    
  angleMode(DEGREES);
  angle=15;
  tower= Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);
  


  ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);

  cannon= new Cannon(190,110,130,100,angle);
  cannonball=new Cannonball(cannon.x,cannon.y)
  
 
}

function draw() {
  background(189);

  image(bg, 0, 0, width, height);
  Engine.update(engine);
 

  





  rect(ground.position.x, ground.position.y,width*2,1);
  push(); //Adds a new property
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310)
  pop(); //removes the last added property
   cannon.display();
   cannonball.display();


}
