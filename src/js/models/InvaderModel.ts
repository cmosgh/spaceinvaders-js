import AimableGameObjectModel from "./AimableGameObjectModel";
import MovingGameObjectModel from "./MovingGameObjectModel";
import ShootingGameObjectModel from "./ShootingGameObjectModel";
import { Mixin } from "ts-mixer";
import HitBoxModel from "./HitBoxModel";

export default class InvaderModel extends Mixin(
  AimableGameObjectModel,
  MovingGameObjectModel,
  ShootingGameObjectModel,
  HitBoxModel
) {}
