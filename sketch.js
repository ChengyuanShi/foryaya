'use strict';

let state = 'title';
let cnv;
let points = 0;
let w =1000;
let h =800;
let player;
let dog1 = [];
let dog2 = [];
let dog3 = [];
let dog4 = [];
let bagel1 = [];
let bagel2 = [];
let bagel3 = [];
let bagel8 = [];
let playerImg;
let dog1Img;
let dog2Img;
let dog3Img;
let dog4Img;
let bgImg;
let bg2Img;
let bagel1Img;
let bagel2Img;
let bagel3Img;
let bagel8Img;
let winImg;
let dieImg;
let starImg;
let star2Img;

function preload(){
  playerImg = loadImage('image/slime.gif');
  dog1Img = loadImage('image/bagel1.gif');
  dog2Img = loadImage('image/bagel1.gif');
  dog3Img = loadImage('image/bagel1.gif');
  dog4Img = loadImage('image/bagel1.gif');

  bagel1Img = loadImage('image/gst.gif');
  bagel2Img = loadImage('image/gst.gif');
  bagel3Img = loadImage('image/gst.gif');
  bagel8Img = loadImage('image/gst.gif');

  bgImg = loadImage('image/BG.gif');
  bg2Img = loadImage('image/BG2.gif');
  winImg = loadImage('image/dog.gif');
  dieImg = loadImage('image/bagel.png');
  starImg = loadImage('image/1.gif');
  star2Img = loadImage('image/2.gif');
}

function setup(){
cnv =  createCanvas(w, h);

textFont('monospace');

  player = new Player();

  // coins[0] = new Coin();
  // dog1.push(new Dog1());
  // dog2.push(new Dog2());
  // dog3.push(new Dog3());
  // dog4.push(new Dog4());
  //
  // bagel1.push(new Bagel1());
  // bagel2.push(new Bagel2());
  // bagel3.push(new Bagel3());
  // bagel8.push(new Bagel8());



}

function draw() {

  switch (state){
    case'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;
  case 'level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
    break;
  case 'you win':
  youWin();
  cnv.mouseClicked(youWinMouseClicked);
    break;
    case 'you lost':
    youLost();
    cnv.mouseClicked(youLostMouseClicked);
      break;
    default:
    break;
  }


}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right'
}
// else if (keyCode == UP_ARROW){
//   player.direction = 'up'
// } else if (keyCode == DOWN_ARROW){
//   player.direction = 'down'
// }
else if (key = ' '){
  player.direction = 'still';
}
}

function keyReleased(){

    player.direction = 'still';
}

// function mousePressed(){
//   state = 'level 1';
// }


function title() {
  background(bgImg);

  textSize(80);

  fill(225, 225, 225);
  textAlign(CENTER);
  text('小莹莹，情人节快乐!', w/2, h/5);


  textSize(25);
  // text('Control:', w/8, h/2.4);
  // text('Left Arrow(Left), Right Arrow(Right)', w/2, h/2.1);
textSize(30);
  text('[Click Anywhere To Start]', w/2, h/1.5);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
  }


function level1(){
  background(bg2Img);

  if (random(1.8) <= 0.01){
dog1.push(new Dog1());
}
if (random(1.8) <= 0.01){
dog2.push(new Dog2());
}
if (random(1.8) <= 0.01){
dog3.push(new Dog3());
}
if (random(1.8) <= 0.01){
dog4.push(new Dog4());
}
if (random(1.8) <= 0.01){
    bagel1.push(new Bagel1());
    }
    if (random(1.8) <= 0.01){
        bagel2.push(new Bagel2());
        }
        if (random(1.8) <= 0.01){
            bagel3.push(new Bagel3());
            }
            if (random(1.8) <= 0.01){
                bagel8.push(new Bagel8());
                }


  player.display();
  player.move();

  for (let i = 0; i < dog1.length; i++){
    dog1[i].display();
    dog1[i].move();

  }

  for (let i = dog1.length - 1; i >= 0; i--){

  if(dist(player.x, player.y, dog1[i].x, dog1[i].y) <= (player.r + dog1[i].r)/2){
    points++;

    console.log(points);
    dog1.splice(i, 1);
  } else if (dog1[i]. y > h){

    dog1.splice(i, 1);
    console.log('coin is out of town');

  }
}

for (let i = 0; i < dog2.length; i++){
  dog2[i].display();
  dog2[i].move();

}

for (let i = dog2.length - 1; i >= 0; i--){

if(dist(player.x, player.y, dog2[i].x, dog2[i].y) <= (player.r + dog2[i].r)/2){
  points++;

  console.log(points);
  dog2.splice(i, 1);
} else if (dog2[i]. y > h){
  dog2.splice(i, 1);
  console.log('coin is out of town');

}
}

for (let i = 0; i < dog3.length; i++){
  dog3[i].display();
  dog3[i].move();

}

for (let i = dog3.length - 1; i >= 0; i--){

if(dist(player.x, player.y, dog3[i].x, dog3[i].y) <= (player.r + dog3[i].r)/2){
  points++;

  console.log(points);
  dog3.splice(i, 1);
} else if (dog3[i]. y > h){
  dog3.splice(i, 1);
  console.log('coin is out of town');

}
}

for (let i = 0; i < dog4.length; i++){
  dog4[i].display();
  dog4[i].move();

}

for (let i = dog4.length - 1; i >= 0; i--){

if(dist(player.x, player.y, dog4[i].x, dog4[i].y) <= (player.r + dog4[i].r)/2){
  points++;

  console.log(points);
  dog4.splice(i, 1);
} else if (dog4[i]. y > h){
  dog4.splice(i, 1);
  console.log('coin is out of town');

}
}


for (let i = 0; i < bagel1.length; i++){
  bagel1[i].display();
  bagel1[i].move();
}


for (let i = bagel1.length - 1; i >= 0; i--){

if(dist(player.x, player.y,bagel1[i].x, bagel1[i].y) <= (player.r + bagel1[i].r)/2){
  points-=10;
  console.log(points);
  bagel1.splice(i, 1);
} else if (bagel1[i]. y > h){
  bagel1.splice(i, 1);
  console.log('enemy is out of town');
}
}

for (let i = 0; i < bagel2.length; i++){
  bagel2[i].display();
  bagel2[i].move();
}


for (let i = bagel2.length - 1; i >= 0; i--){

if(dist(player.x, player.y,bagel2[i].x, bagel2[i].y) <= (player.r + bagel2[i].r)/2){
    points-=10;
  console.log(points);
  bagel2.splice(i, 1);
} else if (bagel2[i]. y > h){
  bagel2.splice(i, 1);
  console.log(' bagel2 is out of town');
}
}

for (let i = 0; i < bagel3.length; i++){
  bagel3[i].display();
  bagel3[i].move();
}


for (let i = bagel3.length - 1; i >= 0; i--){

if(dist(player.x, player.y,bagel3[i].x, bagel3[i].y) <= (player.r + bagel3[i].r)/2){
  points-=10;
  console.log(points);
  bagel3.splice(i, 1);
} else if (bagel3[i]. y > h){
  bagel3.splice(i, 1);
  console.log(' bagel3 is out of town');
}
}

for (let i = 0; i < bagel8.length; i++){
  bagel8[i].display();
  bagel8[i].move();
}


for (let i = bagel8.length - 1; i >= 0; i--){

if(dist(player.x, player.y,bagel8[i].x, bagel8[i].y) <= (player.r + bagel8[i].r)/2){
  points-=10;
  console.log(points);
  bagel8.splice(i, 1);
} else if (bagel8[i]. y > h){
  bagel8.splice(i, 1);
  console.log('enemy is out of town');
}
}





if(points<=0){
  player.r=70;
}
if(points<=-1){
  state = 'you lost';
dog1 = [];
dog2 = [];
dog3 = [];
dog4 = [];
bagel1 = [];
bagel2 = [];
bagel3 = [];
bagel8 = [];
}
if(points>=12){
  state = 'you win';
  dog1 = [];
  dog2 = [];
  dog3 = [];
  dog4 = [];
  bagel1 = [];
  bagel2 = [];
  bagel3 = [];
  bagel8 = [];
}

fill(0, 0, 0);
text('points: ' + points, w/7, h - 750);
// text('dog +1', w/1.2, h - 560);
// text('bagel -10', w/1.2, h - 530);
// text('12 points to win', w/1.3, h - 500);
}




function level1MouseClicked(){

    // points++;
    console.log('points = ' + points);

    // if(points = 10){
    //   state = 'you win';
    // }
}

function youWin(){
  background(winImg);
  textSize(50);
  // fill(185, 128, 0);
  // textAlign(CENTER);
  // text('YOU WIN', w/2, h/1.94);

  // textSize(30);
  // text('click anywhere to restart', w/2, h/1.02);

}

function youWinMouseClicked(){
  state = 'title';
  points = 0;
}

function youLost(){
  background(dieImg);
  textSize(50);
  // fill(185, 128, 0);
  // textAlign(CENTER);
  // text('YOU LOST', w/2, h/1.94);

  // textSize(30);
  // text('click anywhere to restart', w/2, h/1.02);

}
function youLostMouseClicked(){
  state = 'title';
  points = 0;
}
