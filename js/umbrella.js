class Umbrella{
    constructor(x, y, width, height) {

        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width*2;
        this.height = height*2;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("blue");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}