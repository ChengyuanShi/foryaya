
class Dog4 {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 6;


  }

  display(){
        image(dog4Img, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y += this.speed;
    this.y++;

  }
}
