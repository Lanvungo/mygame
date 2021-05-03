var hero1,hero2,hero3;
var score=0;
var GrockG,SladeG;
var sladeI,grockI;
var robinI;
var hero,random;
var ground;
function preload()
{
robinI=loadImage("images/robin.png")
sladeI=loadImage("images/slade.jpg")
grockI=loadImage("images/grock.jpg")
bisboyI=loadImage("images/bisboy.png")
cyborgI=loadImage("images/cyborg.jpg")
groundI=loadImage("images/ground.jpg")
starI=loadImage("images/star.jpg")
starG=new Group();
}
function setup()
{
  createCanvas(1200,800);
//hero1=createSprite(500,600,40,100);
//hero1.addImage(robinI)
//hero1.scale=0.2
//hero2=createSprite(500,600,40,100);
//hero3=createSprite(500,600,40,100);
background1=createSprite(1200,800)
background1.addImage("ground",groundI)
background1.scale=2.5
background1.velocityY=2;
GrockG=new Group()
SladeG=new Group()
heroCreation();
}
function draw()
{
  //background("blue")
if(background1.y<0)
{
background1.y=background1.height/2
}
GrockCreation();
heroMove();
if(GrockG.isTouching(hero))
{
  textSize(35);
  text("damn thats bad you lost",200,200)
  GrockG.setVelocityXEach(0)
  hero.velocityX=0;
}
if(keyCode===32)
{
  createStar();
  star.y=hero.y
  star.x=hero.x
}
if(starG.isTouching(GrockG))
{
  GrockG.destroyEach()
  score=score+10
}
drawSprites();
}
function GrockCreation()
{
  if(frameCount%200===0)
  {
    var Grock=createSprite(random(50,1100),random(100,150),50,100)
    Grock.addImage("grock",grockI)
    Grock.velocityY=5
    Grock.scale=0.1
    GrockG.add(Grock)
  } 
}
function heroCreation()
{
  hero=createSprite(200,600,50,100);
  ran=Math.round(random(1,3));
  switch(ran)
  {
case 1:hero.addImage(robinI);
break;
case 2:hero.addImage(bisboyI);
break;
case 3:hero.addImage(cyborgI);
break;
default:break;
  }
hero.scale=0.2;
}
function heroMove()
{
if(keyCode===RIGHT_ARROW)
{
  hero.x=hero.x+5;

}
if(keyCode===LEFT_ARROW)
{
  hero.x=hero.x-5;

}
if(keyCode===UP_ARROW)
{
  hero.y=hero.y-5;

}
if(keyCode===DOWN_ARROW)
{
  hero.y=hero.y+5;

}
}
function createStar()
{
  star=createSprite(200,600,30,30)
  star.addImage(starI)
  star.scale=0.1
  star.velocityY=-5
  starG.add(star)
}