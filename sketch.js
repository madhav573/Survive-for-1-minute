let song;
var x=0,y=0,c=1,v=3,x2=200,y2=200,t=0,goal=60,flag=0;

function preload(){
    song = loadSound('Ohoh_2.mp3');

}

function setup() {
  createCanvas(400, 400);
  PA = createButton("Play again")
  L = createButton("Left")
  R = createButton("Right")
  D = createButton("Down")
  U = createButton("UP")
  lock = createButton("SLOW")
  lock.position(330,215)
  L.position(300,300)
  R.position(350,300)
  D.position(300,350)
  U.position(300,250)
  lock.size(70,30)
  U.size(100,50)
  D.size(100,50)
  L.size(50,50)
  R.size(50,50)
  
}

function draw() {  
  if(t==0){
    play()
  }
    PA.hide()
  if(t<goal && flag==0){
  t=t+0.01
  
  }
  background(220);
 
    if(t>=goal &&flag==0){
    fill("black")
    textSize(20)
    text("SURVIVED!!!!!!!",130,200)
    PA.mousePressed(resett)
      song.stop()
  }
    if(t<goal &&flag==1){
     fill("black")
     textSize(20)
     text("YOU LOST!!",130,200)
     PA.show()
     PA.position(130,220)
     PA.mousePressed(resett)
      song.stop()
  }
  fill("black")
  textSize(20)
  text("TIME: "+round(t,2),295,30)
  fill("green")
  ellipse(x,y,20,20);
  fill("red")
  ellipse(x2,y2,20,20);



  
 if(t<goal && flag==0){
   if((x2<x+10 && x2>x-10) && y2<y+10 && y2>y-10){
       fill("black")
       textSize(20)
       flag=1
   }

 U.mousePressed(up);
 D.mousePressed(down);
 L.mousePressed(left);
 R.mousePressed(right);
 lock.mousePressed(locked)
  
 
  if(x2<x){
    x2=x2+0.3;
  }
  if(x2>x){
    x2=x2-0.3;
  }
  
  if(y2<y){
    y2=y2+0.3;
  }
  if(y2>y){
    y2=y2-0.3;
  }
   
   
  }
  
}

function locked(){
  c=c+1
  if(c%2==0){
    v=6
  lock.html("FAST")
  }
  else{
    v=3
  lock.html("SLOW")
  }
}
function up(){
  if(t<goal){
  y=y-v
  }
}
function down(){
  if(t<goal){
  y=y+v
  }
}

function left(){
  if(t<goal){
  x=x-v
  }
}
function right(){
  if(t<goal){
  x=x+v
  }
}
function resett(){
 window.location.reload();
}

function play(){
    song.play()
}

