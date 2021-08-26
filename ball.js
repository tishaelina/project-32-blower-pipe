class Ball{
    constructor(x, y, r){
        this.r = r; 
        this.body = Bodies.circle(x, y, r);
        World.add(world, this.body);
    }

    reveal(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r);
        pop();
    }
}
