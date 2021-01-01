const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImage
var engine, world;
var box1, box2, box3, box4, box5
var pig1, pig2, bird;
var log1, log2, log3, log4;

function preload(){
    backgroundImage = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    box5 = new Box(800,160,70,70);
    ground = new Ground(200,height,2000,20)
    pig1 = new Pig(800,350);
    pig2 = new Pig(800,200);
    log1 = new Log(800,250,350,PI/2);
    log2 = new Log(800,180,350,PI/2);
    log3 = new Log(750,120,150,PI/7);
    log4 = new Log(850,120,150,-PI/7);
    bird = new Bird(100,100);
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}