import BaseGameObjectModel from "./BaseGameObjectModel";
import Ammo from "./ammo";

export default class AimableGameObjectModel extends BaseGameObjectModel {
  isShotBy(shot: Ammo) {
    if (!shot) {
      return;
    }

    const isBetween = (x, a, b) => {
      return a < x && x < b;
    };

    return (
      this.active &&
      isBetween(shot.x, this.x, this.x + this.width) &&
      isBetween(shot.y - this.height / 2, this.y, this.y + this.height / 2)
    );
  }
}
