class Rubber{
    constructor(){
        var options={
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body=Bodies.circle(500,350,40,options);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill('blue');
        strokeWeight(4);
        ellipse(0,0,40);
        pop();
    }
}