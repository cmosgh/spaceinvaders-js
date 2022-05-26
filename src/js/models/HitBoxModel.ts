import BaseGameObjectModel from "./BaseGameObjectModel";
import { rectIntersect } from "../utils";

export default class HitBoxModel extends BaseGameObjectModel {
  isHitting(gameObject: BaseGameObjectModel) {
    if (!gameObject) return false;

    return (
      this.active &&
      gameObject.active &&
      rectIntersect(
        gameObject.x,
        gameObject.y,
        gameObject.width,
        gameObject.height,
        this.x,
        this.y,
        this.width,
        this.height
      )
    );
  }
}
