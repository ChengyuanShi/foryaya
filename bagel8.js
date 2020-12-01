
class Bagel8 {
  constructor(){
    this.r = 40;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 6;
  }

  display(){
        image(bagel8Img, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y += this.speed;
    this.y++;
  }
}
