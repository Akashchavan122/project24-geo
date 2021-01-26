const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//creating variables
var stone;
var ground;
var hammer;
var rubber;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    stone=new Stone(200,200,50,50);
    ground=new Ground(200,height,400,20);
    hammer=new Hammer(300,200,100,100);
    

}

function draw(){
    background("blue");
    Engine.update(engine);
    stone.display();
    ground.display();
    hammer.display();
    

}
