  let img; // Declare variable 'img'.
  let sound;
  var testConfetti;
  var index = 0
function preload(){
  sound = loadSound("POW.mp3")
}

function setup() {
   width = 512
   height = 512

  createCanvas(width,height);
  img = loadImage('Cake.png'); // Load the image
  testConfetti=[]
}



function draw() {
  background(color("lightskyblue"))
  image(img, (width/2)-60,(height/2)-60);
  testConfetti.forEach(particle => {
    particle.update()
    particle.draw()
  });

  if(testConfetti.length>150){
    testConfetti.splice(0,10)
  }
  
}
function confetti(x,y,vx,vy){
  this.x=x
  this.y=y
  this.velocity={x:vx,y:vy}
  this.index = index
  index++
  this.draw=function(){
    fill(color('green'));
    rect(this.x, this.y, 12, 8);
  }
  this.update=function(){
    this.velocity.y+=.1
    this.x+=this.velocity.x
    this.y+=this.velocity.y
    }
  }
  


function mousePressed(){
  for(var i=0;i<8;i++){
    var theta = Math.random()*360
    var sx=Math.sin(theta)
    var sy=Math.cos(theta)
    testConfetti.push(new confetti(mouseX,mouseY,sx,sy))
}
sound.play()
}
