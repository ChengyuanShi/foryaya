
class Bagel3 {
  constructor(){
    this.r = 40;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 6;
  }

  display(){
        image(bagel3Img, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y += this.speed;
    this.y++;
  }
}
