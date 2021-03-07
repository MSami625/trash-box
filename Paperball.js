class Paperball{

    constructor(x,y){

        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image=loadImage("paper.png");
        this.body=Matter.Bodies.circle(x,y,26,options);
        this.radius=26;
        World.add(world,this.body);


    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,80,80);
        pop();
    }

}