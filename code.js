var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d019d6c4-86e9-4e5c-8c5e-c416a2d9947c","e1bb4c2c-1e4b-4c73-8ed8-bebac838ae61","36ffbb0a-59d5-4a88-bf6a-8930bb76c038"],"propsByKey":{"d019d6c4-86e9-4e5c-8c5e-c416a2d9947c":{"name":"bola1","sourceUrl":"assets/api/v1/animation-library/gamelab/SJEkwCG.GLOwO1TwcpEUAZVxhLTdw9Cx/category_video_games/powerupBlue_bolt.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"SJEkwCG.GLOwO1TwcpEUAZVxhLTdw9Cx","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SJEkwCG.GLOwO1TwcpEUAZVxhLTdw9Cx/category_video_games/powerupBlue_bolt.png"},"e1bb4c2c-1e4b-4c73-8ed8-bebac838ae61":{"name":"bolamau","sourceUrl":"assets/api/v1/animation-library/gamelab/_ULEwZxzC5zrDHSMDLExh683fOgrddy3/category_video_games/powerupRed_bolt.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"_ULEwZxzC5zrDHSMDLExh683fOgrddy3","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_ULEwZxzC5zrDHSMDLExh683fOgrddy3/category_video_games/powerupRed_bolt.png"},"36ffbb0a-59d5-4a88-bf6a-8930bb76c038":{"name":"estrela","sourceUrl":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png","frameSize":{"x":396,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bola1 = createSprite (45, 200, 15, 15);
bola1.setAnimation ("bola1");
bola1.scale = 0.5;
var bola2 = createSprite (115, 200, 10, 10);
bola2.setAnimation ("bolamau");
bola2.scale = 0.4;
var bola3 = createSprite (175, 200, 10, 10);
bola3.setAnimation ("bolamau");
bola3.scale = 0.4;
var bola4 = createSprite (235, 200, 10, 10);
bola4.setAnimation ("bolamau");
bola4.scale = 0.4;
var bola5 = createSprite (295, 200, 10, 10);
bola5.setAnimation ("bolamau");
bola5.scale = 0.4;
var parede1 = createSprite (50, 175, 60, 2);
var parede2 = createSprite (20, 200, 2, 50);
var parede3 = createSprite (50, 225, 60, 2);
var parede4 = createSprite (80, 145, 2, 60);
var parede5 = createSprite (80, 255, 2, 60);
var parede6 = createSprite (205, 115, 250, 2);
var parede7 = createSprite (205, 285, 250, 2);
var parede8 = createSprite (330, 255, 2, 60);
var parede9 = createSprite (360, 225, 60, 2);
var parede10 = createSprite (390, 200, 2, 50);
var parede11 = createSprite (360, 175, 60, 2);
var parede12 = createSprite (330, 145, 2, 60);
var vitoria = createSprite (385, 200, 5, 40);
var estrela1 = createSprite (90, 125, 10, 10);
estrela1.setAnimation ("estrela");
estrela1.scale = 0.04;
var estrela2 = createSprite (205, 275, 10, 10);
estrela2.setAnimation ("estrela");
estrela2.scale = 0.04;
var estrela3 = createSprite (265, 125, 10, 10);
estrela3.setAnimation ("estrela");
estrela3.scale = 0.04;
vitoria.shapeColor=("black");
var mortes = 0;
var pontos = 0;
velocidade();

function draw() {
  background("white");
  fill ("cyan");
  rect (330, 175, 60, 50);
  fill ("yellow");
  rect (20, 175, 60, 50);
  fill ("red");
  text ("Mortes: "+ mortes,185, 70);
  fill ("green");
  text ("Pontos: "+ pontos, 185, 45);
  
  bola1.bounceOff (parede10);
  bola2.bounceOff (parede6);
  bola2.bounceOff (parede7);
  bola3.bounceOff (parede6);
   bola3.bounceOff (parede7);
   bola4.bounceOff (parede6);
   bola4.bounceOff (parede7);
   bola5.bounceOff (parede6);
   bola5.bounceOff (parede7);
  
  if (keyDown ("w")){
    bola1.y = bola1.y -7;
  }
   if (keyDown ("s")){
    bola1.y = bola1.y +7;
  }
  if (keyDown ("d")){
    bola1.x = bola1.x +7;
  } 
  if (keyDown ("a")){
    bola1.x = bola1.x -7;
  }
    if (keyDown (UP_ARROW)){
    bola1.y = bola1.y -7;
  }
   if (keyDown (DOWN_ARROW)){
    bola1.y = bola1.y +7;
  }
  if (keyDown (RIGHT_ARROW)){
    bola1.x = bola1.x +7;
  } 
  if (keyDown (LEFT_ARROW)){
    bola1.x = bola1.x -7;
  }
  if (bola1.isTouching (parede1)|| bola1.isTouching (parede2)|| bola1.isTouching (parede3)||
  bola1.isTouching (parede4)|| bola1.isTouching (parede5)|| bola1.isTouching (parede6)||
  bola1.isTouching (parede7)|| bola1.isTouching (parede8)|| bola1.isTouching (parede9)||
  bola1.isTouching (parede11)|| bola1.isTouching (parede12)){
    bola1.y = 200;
    bola1.x = 45;
  }
  
  if (bola1.isTouching (bola2)|| bola1.isTouching (bola3)|| bola1.isTouching (bola4)||
  bola1.isTouching (bola5)){
    bola1.y = 200;
    bola1.x = 45;
    mortes = mortes+1;
  }
  
  if (bola1.isTouching (vitoria)&&pontos>=3){
    fill ("green");
    textSize (20);
    text ("Você venceu!", 155,90);
  }
  if (bola1.isTouching (vitoria)&&pontos<3){
    fill ("yellow");
    textSize (20);
    text ("Volte e pegue as estrelas!", 105,90);
  }
  if (bola1. isTouching (estrela1)){
    estrela1.destroy();
    pontos=pontos+1;
  }
 if (bola1. isTouching (estrela1)){
    estrela1.destroy();
    pontos=pontos+1;
  }
 if (bola1. isTouching (estrela2)){
    estrela2.destroy();
    pontos=pontos+1;
  }
  if (bola1. isTouching (estrela3)){
    estrela3.destroy();
    pontos=pontos+1;
  } 
  
  
  
  
  drawSprites ();
}
function velocidade (){
  bola2.velocityY = -13;
  bola3.velocityY = +13;
  bola4.velocityY = -13;
  bola5.velocityY = +13;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
