
class Dog1 {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 5;


  }

  display(){
        image(dog1Img, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y += this.speed;
    this.y++;

  }
}
