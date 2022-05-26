export default class BaseGameObjectModel {
  constructor(
    public x: number,
    public y: number,
    public img: CanvasImageSource | null,
    public active: Boolean = true,
    public width: number = 40,
    public height: number = 40
  ) {}
  draw(ctx: CanvasRenderingContext2D) {
    this.active &&
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
