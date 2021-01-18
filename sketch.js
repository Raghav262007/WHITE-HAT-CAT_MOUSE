var gardenImg, garden;
var jerryImg, jerryImg2, jerry;
var tomImg, tomImg2, tomImg3, tom;
var invis1, invis2, invis3, invis4;

function preload() {
  //load the images here
  gardenImg = loadImage("garden.png");

  jerryImg = loadAnimation(
    "jerryFour.png",
    "jerryOne.png",
    "jerryTwo.png",
    "jerryThree.png"
  );

  tomImg = loadAnimation("tomOne.png");
  tomImg2 = loadAnimation("tomThree.png", "tomTwo.png");
  tomImg3 = loadImage("tomFour.png");
}

function setup() {
  createCanvas(1000, 800);
  //create tom and jerry sprites here
  garden = createSprite(500, 400);
  garden.addImage("garden", gardenImg);
  garden.scale = 1.1;

  jerry = createSprite(170, 625, 100, 60);
  jerryImg.frameDelay = 35;
  jerry.addAnimation("jerry", jerryImg);
  jerry.scale = 0.1;

  tom = createSprite(960, 422, 100, 60);
  tom.addAnimation("tom", tomImg);
  tom.scale = 0.1;

  invis1 = createSprite(1000, 400, 10, 1000);
  invis2 = createSprite(500, 800, 1000, 10);
  invis3 = createSprite(0, 400, 10, 1000);
  invis4 = createSprite(500, 0, 1000, 10);
}

function draw() {
  background(150);
  //Write condition here to evalute if tom and jerry collide

  tom.collide(invis4);
  tom.collide(invis3);
  tom.collide(invis2);
  tom.collide(invis1);

  if (tom.x - jerry.x < tom.width / 2 - jerry.width / 2) {
    jerry.velocityX = 0;
    tom.velocityX = 0;
    tom.velocityY = 0;

    tom.addAnimation("tom", tomImg3);
  }

  drawSprites();
}

function keyPressed() {
  //For moving and changing animation write code here
  if (keyDown(DOWN_ARROW)) {
    tom.velocityY = 3;
    tom.velocityX = -3;
    tom.addAnimation("tom", tomImg2);
    tom.changeAnimation("tom");
  }
}
