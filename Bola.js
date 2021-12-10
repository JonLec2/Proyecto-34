class Bola{
    constructor(x, y, r){
var options={
    restitution: 1.6,
    friction: 0,
}

this.r=r
this.body=Bodies.circle(x, y, this.r, options);
this.image=loadImage("Bolafuego.png")
World.add(world, this.body);
    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
  
    imageMode(RADIUS);
    image(this.image, 0,0,this.r,this.r);
    pop();

}
}
