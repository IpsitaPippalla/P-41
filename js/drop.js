class Drop{
    constructor(x,y,radius){
      var options ={
          restitution: 0.8
      }  


this.body = Bodies.circle(x,y,radius, options)
World.add(world,this.body)

this. radius = radius*2


    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    }
}