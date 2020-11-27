'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let dog1 = [];
let bagel1 = [];
let playerImg;
let dog1Img;
let bgImg;
let bagel1Img;
let winImg;
let dieImg;


function preload(){
  playerImg = loadImage('image/slime.gif');
  dog1Img = loadImage('image/dog1.png');
  bagel1Img = loadImage('image/bagel1.png');
  bgImg = loadImage('image/BG.gif');
  winImg = loadImage('image/win.gif');
  dieImg = loadImage('image/die.gif');
}

function setup(){
cnv =  createCanvas(w, h);

textFont('monospace');

  player = new Player();

  // coins[0] = new Coin();
  dog1.push(new Dog1());

  bagel1.push(new Bagel1());
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
  fill(255);
  textAlign(CENTER);
  text('RAIN SLIME', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2.8);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
  }


function level1(){
  background(bgImg);

  if (random(1) <= 0.01){
    dog1.push(new Dog1());

    bagel1.push(new Bagel1());
  }

  player.display();
  player.move();

  for (let i = 0; i < dog1.length; i++){
    dog1[i].display();
    dog1[i].move();

  }


  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }

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




for (let i = 0; i < bagel1.length; i++){
  bagel1[i].display();
  bagel1[i].move();
}


// coins.forEach(function(coin){
//   coin.display();
//   coin.move();
// })

// for (let coin of coins){
//   coin.display();
//   coin.move();
// }

for (let i = bagel1.length - 1; i >= 0; i--){

if(dist(player.x, player.y,bagel1[i].x, bagel1[i].y) <= (player.r + bagel1[i].r)/2){
  points-= 5;
  console.log(points);
  bagel1.splice(i, 1);
} else if (bagel1[i]. y > h){
  bagel1.splice(i, 1);
  console.log('enemy is out of town');
}

if(points<=0){
  player.r=70;
}
if(points<=-1){
  state = 'you lost';
}
if(points>=21){
  state = 'you win';
}



}text('points: ' + points, w/7, h - 560);
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
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('YOU WIN', w/2, h/5);

  textSize(30);
  text('click anywhere to restart', w/2, h/2.8);

}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}

function youLost(){
  background(dieImg);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('YOU LOST', w/2, h/5);

  textSize(30);
  text('click anywhere to restart', w/2, h/1.02);

}
function youLostMouseClicked(){
  state = 'level 1';
  points = 0;
}
