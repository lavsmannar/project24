class Stone{
    constructor(){
        var options={
            'density':2,
            'friction':1.0,
            'restitution':0.5
        }
        this.body=Bodies.rectangle(200,200,100,100,options);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0);
        strokeWeight(4);
        rect(0,0,100,40);
        pop();
    }
}