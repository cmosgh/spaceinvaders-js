import AimableGameObjectModel from "./AimableGameObjectModel";
import HitBoxModel from "./HitBoxModel";
import MovingGameObjectModel from "./MovingGameObjectModel";
import ShootingGameObjectModel from "./ShootingGameObjectModel";
import { Mixin } from "ts-mixer";

export default class ShipModel extends Mixin(
  AimableGameObjectModel,
  HitBoxModel,
  MovingGameObjectModel,
  ShootingGameObjectModel
) {}
