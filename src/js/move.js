import init from "./init/init";
import { invaderShot, moveShots } from "./shots-controller";
import { invaders, ship } from "./init/objects";

export let invaderDx = -2;

function moveInvaders(){
  let leftX = invaders[0].x;
  let rightX = invaders[invaders.length - 1].x;
  if (leftX <= 20 || rightX >= 440) invaderDx = -invaderDx;
  invaders.forEach((inv) => inv.move(invaderDx, 0.2));
}

function move() {
  moveInvaders()
  moveShots();

  if (ship.isHitBy(invaderShot)) {
    alert("Game OVER!");
    init();
  }
}

export default move;
