class flecha2 extends BaseClass{
    constructor(x, y, width, height) {
      super(x, y, width, height)
      this.image=loadImage("flecha.png")
      this.smokeImg=loadImage("smoke.png")
        this.trayectory=[]
      }
      display(){
        super.display();

        
        if(this.body.velocity.x>10 && this.body.position.x >180){
          var position=[this.body.position.x, this.body.position.y]
          this.trayectory.push(position);
        }


for(var i=0; i<this.trayectory.length; i++) {
 image(this.smokeImg, this.trayectory[i][0], this.trayectory[i][1]);

}



      }
}