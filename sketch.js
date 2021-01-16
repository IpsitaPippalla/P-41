const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder_img

var drops = [];

function preload(){
    thunder_img = loadImage("images/thunderbolt/1.png")
}

function setup(){
   createCanvas(350,600)
  engine = Engine.create();
  world = engine.world;
    
  thunder = new Thunder(150,50,140,140)

  umbrella = new Umbrella(100,500,85,85)


  Engine.run(engine);
}

function draw(){
    background("black")

    
  if(frameCount % 20 === 0) {
    drops.push(new Drop(random(100, 200 || 300, 400), 10, 5));
 
  }


  for(var k = 0; k < drops.length; k++) {
    drops[k].display();
  }

  if(frameCount % 100 == 0){
thunder.display()
  }
umbrella.display()

}   

