const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var polygon_img,sling;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup(){
  var canvas = createCanvas(1300,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,height,1300,20);
  ground2 = new Ground(960,190,200,20);
  //ground level
  block1 = new Box(600,390,30,30);
  block2 = new Box(630,390,30,30);
  block3 = new Box(660,390,30,30);
  block4 = new Box(690,390,30,30);
  block5 = new Box(720,390,30,30);
  block6 = new Box(750,390,30,30);
  block7 = new Box(780,390,30,30);
  //first level
  block8 = new Box(630,360,30,30);
  block9 = new Box(660,360,30,30);
  block10 = new Box(690,360,30,30);
  block11 = new Box(720,360,30,30);
  block12 = new Box(750,360,30,30);
  //second level
  block13 = new Box(660,330,30,30);
  block14 = new Box(690,330,30,30);
  block15 = new Box(720,330,30,30);
  //third level
  block16 = new Box(690,300,30,30);

  //second ground
  //ground level
  block17 = new Box(900,170,30,30);
  block18 = new Box(930,170,30,30);
  block19 = new Box(960,170,30,30);
  block20 = new Box(990,170,30,30);
  block21 = new Box(1020,170,30,30);
  //first level
  block22 = new Box(930,140,30,30);
  block23 = new Box(960,140,30,30);
  block24 = new Box(990,140,30,30);
  //second level
  block25 = new Box(960,110,30,30);

  polygon = new Polygon(100,150,10);

  launch = new Launcher(polygon.body,{x:100,y:150});


  //sling = new SlingShot(this.polygon,{x:100,y:100});


  //polygon = Bodies.circle(100,200,20);
  //World.add(world,polygon);
  
}

function draw(){
  rectMode(CENTER);
  background("white");  
  Engine.update(engine);

 ground1.display();
 ground2.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
launch.display();    
polygon.display();

//launch.display();
//sling.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launch.fly()
}

function keyPressed(){
  if(keyCode === 32){
      launch.attach(polygon.body);
  }
}


