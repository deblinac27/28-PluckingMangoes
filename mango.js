class Mango{
    constructor(x, y, radius){
        var options={
            'restitution':0.5,
            'friction':1.0,
            isStatic:true
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 60;
        this.image = loadImage("sprites/mango.png");
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}