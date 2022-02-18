var  bird,bird_flying;
var sky_image;
var cloudsGroup, cloudImage;
var apple,appleimg;
var strawberry,strawberryimg;
var guava,guavaimg;
var cherry,cherryimg;


function preload(){
 bird_flying = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png");
 sky_image = loadImage("backgroundImg.png");
 cloudImage = loadImage("cloud.png");
 appleimg = loadImage("download 1.png");
 strawberryimg = loadImage("download (1).jpg")
 guavaimg = loadImage("download (2).jpg")
}

function setup() {
 createCanvas(windowWidth,windowHeight);

 bird = createSprite(75,height-350,20,20);
 bird.addAnimation("flying",bird_flying);
 bird.scale=0.5

 cloudsGroup = new Group();

}

function draw() {
 background(sky_image);

 if(keyDown("up")) {
   bird.y=bird.y-5
 }

 if(keyDown("down")) {
   bird.y=bird.y+5
 }

  var rand=Math.round(random(1,3))

  switch(rand){
     case 1:spawnstrawberry();
            break;
     case 2:spawnapples();
            break;
     case 3:spawnguava();
            break;
     default:break;
  }

 drawSprites();

 spawnClouds();
}

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(width+20,height-300,40,10);
      cloud.y = Math.round(random(100,220));
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3
      cloud.lifetime = 600

      cloudsGroup.add(cloud);

      cloud.depth=bird.depth;
      bird.depth=bird.depth+1
    }
}

function spawnapples(){
  if(frameCount % 100===0){
  apple=createSprite(width,random(50,height),20,20)
  apple.addAnimation("apple",appleimg)
  apple.velocityX = -5
  apple.scale=0.3
  }
} 
function spawnstrawberry(){
  if(frameCount % 60===0){
  strawberry=createSprite(random(700,800),random(50,350),20,20)
  strawberry.addAnimation("strawberry",strawberryimg)
  strawberry.velocityX = -5
  strawberry.scale=0.3
  }
}
function spawnguava(){
  if(frameCount % 100===0){
    guava=createSprite(random(800,1000),random(50,350),20,20)
    guava.addAnimation("guava",guavaimg)
    guava.velocityX = -5
    guava.scale=0.3
  }
}