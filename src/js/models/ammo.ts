export default class Ammo {
  x: number;
  y: number;
  ySpeed: number;
  color: string;

  constructor(x: number, y: number, ySpeed: number, color: string = "#00F") {
    this.x = x;
    this.y = y;
    this.ySpeed = ySpeed;
    this.color = color;
  }

  move(secondsPassed:number=0) {
    this.y += secondsPassed * this.ySpeed;
    return this.y > 0 && this.y < 600;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - 1, this.y, 3, 20);
  }
}
