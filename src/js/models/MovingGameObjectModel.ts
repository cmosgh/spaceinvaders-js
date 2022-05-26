import BaseGameObjectModel from "./BaseGameObjectModel";

export default class MovingGameObjectModel extends BaseGameObjectModel {
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
