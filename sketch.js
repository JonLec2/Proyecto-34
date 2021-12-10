const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine
var backgroundImg
var base
var world
var ground1
var tro1, tro2, tro3, tro4, tro5, tro6, tro7;
var arquero, arco;
var bloque1
var bl1, bl2, bl3, bl4, bl5, bl6, bl7, bl8, bl9, bl10, bl11, bl12, bl13, bl14, bl15, bl16, bl17, bl18, bl19;
var flech1
var sl
var alien1
var alien11
var alien111;
var ov1, ov2;
var ovv1;
var ball=[]
var score=0
var count=0;
var gameState="empezar"
var myFont

function preload() {
    backgroundImg = loadImage("wallpaperbetter.png");
    arquero=loadImage("Hawkeye.png")
    arco=loadImage("pngegg.png")
    base=loadImage("base11.png")

}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    ground1=new ground();

    
    tro1=new tronco(530, 528, 120, 20, -PI/7);
    tro2=new tronco(670, 530, 160, 20, PI)
    tro3=new tronco(720, 460, 100, 20, PI)
    tro4=new tronco(630, 370,120, 20, PI)
    tro5=new tronco(945, 500, 200, 20, PI)
    tro6=new tronco(1200, 500, 120, 20, PI)

    //tronco de apoyo
    bloque1=new Block(110, 500, 250, 100);
    flech1=new flecha2(160, 400, 100, 20);
    sl=new Slingshot(flech1.body, {x:190, y:370})
   
    alien1=new marcian1(715, 420, 60, 70)
    alien11=new marcian1(1000, 430, 60, 70)
    alien111=new marcian1(1190, 430, 60, 70)
    
   

    ov1=new ovni1(500, 100, 120, 80)
    ov2=new ovni1(900, 150, 120, 80)
    ovv1=new ovni2(1100, 120, 120, 60)

    //bloque torres
    //nivel1
    bl1=new Block(600, 550, 50, 50)
    bl2=new Block(650, 550, 50, 50)
    bl3=new Block(750, 550, 50, 50)

    //torre2
    bl9=new Block(890, 550, 50, 50)
    bl10=new Block(1000, 550, 50, 50)

    //torre3
    bl14=new Block(1150, 550, 50, 50)
    bl15=new Block(1250, 550, 50, 50)

   //nivel2
   bl4=new Block(630, 480, 50, 50)
   bl5=new Block(715, 480, 50, 50)


   //torre2

   bl11=new Block(890, 480, 50, 50)
   bl12=new Block(1000, 480, 50, 50)

   //torre3
   bl16=new Block(1150, 480, 50, 50)


   //nivel3
bl6=new  Block(630, 430, 50, 50)

//torre2
bl13=new Block(890, 430, 50, 50)

//torre3
bl17=new Block(1200, 480, 50, 50)

//nivel4
bl7=new Block(630, 380, 50, 50)

//nivel5
bl8=new Block(630, 310, 50, 50)
  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

if(frameCount % 60===0){
    ball.push(new Bola(490, 200, 20))
   
}

noStroke();
textSize(20);
fill("white");
text("Puntuación=" + score, width-300, 50)

    //imagen
    image(base, -70, 280, 300, 300 )
    image(arquero, 120, 335, 100, 125)
    image(arco, 160, 330, 100, 120)

    
    ground1.display();
    tro1.display();
    tro2.display();
    flech1.display();
    sl.display();
    ov1.display();
    ov2.display();
 
    ovv1.display();
    bl1.display();
    bl2.display();
    bl3.display();
    bl4.display();
    bl5.display();
    bl6.display();
    bl7.display();
    bl8.display();
bl9.display();
bl10.display();
bl11.display();
bl12.display();
bl13.display();
bl14.display();
bl15.display();
bl16.display();
bl17.display();

    tro3.display();
    tro4.display();
    tro5.display(),
    tro6.display();
    alien1.display();
    alien1.score1();
    alien11.display();
    alien11.score1();
    alien111.display();
    alien111.score1();

    detectollision(flech1, ov1)
    detectollision(flech1, ov2)
    detecto(flech1,ovv1 )

for(var m=0; m<ball.length; m++){
  ball[m].display();
}


if(gameState=="end"){
    textSize(100)
    text("GameOver" , 400, 250)
Matter.Body.setPosition(flech1.body, {x:190, y:370})


  }

}

function mouseDragged(){
    Matter.Body.setPosition(flech1.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){
    sl.fly();
    gameState="move"
    count++;

    if (count>5) gameState="end";

}

function keyPressed(){
    if(keyCode=== 32){
 flech1.trayectory=[];
        sl.attach(flech1.body)
        Matter.Body.setPosition(flech1.body, {x:160, y:400})
      
    }
}

function detectollision(lsflecha,lovni){

    flecha2BodyPosition=lsflecha.body.position
    ovni1BodyPosition=lovni.body.position
    
    var distance=dist(flecha2BodyPosition.x, flecha2BodyPosition.y, ovni1BodyPosition.x, ovni1BodyPosition.y)
        if(distance<=lovni.width+lsflecha.width && distance<=lovni.height+lsflecha.height )
      {
          Matter.Body.setStatic(lovni.body,false);
          score=score+50
          ball=[];
     
      }
  
    }


    function detecto(lsflechaw,lovniw){

        flecha2BodyPosition=lsflechaw.body.position
        ovni2BodyPosition=lovniw.body.position
        
        var distance=dist(flecha2BodyPosition.x, flecha2BodyPosition.y, ovni2BodyPosition.x, ovni2BodyPosition.y)
            if(distance<=lovniw.width+lsflechaw.width && distance<=lovniw.height+lsflechaw.height )
          {
              Matter.Body.setStatic(lovniw.body,false);
           score++;
          }
      
        }
    

  