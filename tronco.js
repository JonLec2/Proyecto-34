class tronco extends BaseClass{
    constructor(y,x,width, height,angle){
      super(y,x,width,height,angle);
      this.image = loadImage("tronco.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }
  