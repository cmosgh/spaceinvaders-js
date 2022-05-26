import BaseGameObjectModel from "./BaseGameObjectModel";
import Ammo from "./ammo";

export default class ShootingGameObjectModel extends BaseGameObjectModel {
  shoot(ySpeed: number, color?: string) {
    return new Ammo(this.x + 20, this.y + 10, ySpeed, color);
  }
}
