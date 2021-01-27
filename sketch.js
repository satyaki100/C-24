const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(250,350,50,50);
    box2 = new Box(150,350,50,50);
    pig1 = new Pig(200,350,30,30)
    ground1 = new Ground(200 , height , 400 , 20)
    log1 = new Log(200,300,180,PI/2)
}

function draw(){
    background("blue");
    Engine.update(engine);
    box1.display();
    box2.display();
   ground1.display();
   pig1.display();
   log1.display();
}