var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var score = 0

function preload() {
  bgImg = loadImage("assets/bg.png")

  cleitinhoImg = loadAnimation("assets/cleitinho1.png", "assets/cleitinho2.png", "assets/cleitinho3.png", "assets/cleitinho4.png")
  meteoritoImg = loadAnimation("assets/meteorito/sprite_meteorito0.png", "assets/meteorito/sprite_meteorito1.png", "assets/meteorito/sprite_meteorito2.png", "assets/meteorito/sprite_meteorito3.png")
  cometaImg = loadAnimation("assets/cometa/sprite_cometa0.png", "assets/cometa/sprite_cometa1.png", "assets/cometa/sprite_cometa2.png", "assets/cometa/sprite_cometa3.png", "assets/cometa/sprite_cometa4.png", "assets/cometa/sprite_cometa5.png")
  naveInimiga = loadImage("assets/nave inimiga/sprite_nave0.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //criando canto superior e inferior
  bottomGround = createSprite(200, 390, 800, 20);
  bottomGround.visible = false;
  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;

  //criando o cleitinho  
  cleitinho = createSprite(100, 200, 20, 50);
  cleitinho.addAnimation("cleitinho", cleitinhoImg);
  cleitinho.scale = 5;

  meteoritoGroup = new Group()
  cometaGroup = new Group()
  naveInimigaGroup = new Group()


}

function draw() {

  background(255);
  image(bgImg, 0, 0, width, height)
  //fazendo o balão de ar quente pular
  if (keyDown("space")) {
    cleitinho.velocityY = -10;
  }
  //adicionando gravidade
  cleitinho.velocityY = cleitinho.velocityY + 1;

  if (meteoritoGroup.isTouching(cleitinho)) {

  }

  // chamada das funções
  handleCometa()
  handleMeteoritoTop()
  handleMeteoritoDown()
  drawSprites();


}
// meteoro = cano
function handleMeteoritoTop() {
  if (frameCount % 150 === 0) {
    meteoritotop = createSprite(width - 100, random(height / 2 - 100, height / 2 - 300), 50, 50)
    meteoritotop.addAnimation("meteor", meteoritoImg)
    meteoritotop.scale = random(0.4, 0.8)
    meteoritotop.velocityX = -5

    meteoritoGroup.add(meteoritotop)
  }
}
function handleMeteoritoDown() {
  if (frameCount % 150 === 0) {
    meteoritodown = createSprite(width - 100, random(height / 2 + 100, height / 2 + 300), 50, 50)
    meteoritodown.addAnimation("meteor", meteoritoImg)
    meteoritodown.scale = random(0.4, 0.8)
    meteoritodown.velocityX = -5

    meteoritoGroup.add(meteoritodown)
  }
}

function handleCometa() {
  if (frameCount % 178 === 0) {
    cometa = createSprite(width - 100, height - 500, 50, 50)
    cometa.addAnimation("asteroide", cometaImg)
    cometa.scale = 0.6
    cometa.velocityY = random(2, 5)
    cometa.velocityX = random(-3, -5)
    
    cometaGroup.add(cometa)
  }
}

function score() {
  if (cleitinho)
}