import init from "./init/init";
import { invaderShot, moveShots } from "./shots-controller";
import { invaders, ship } from "./init/objects";

export let invaderDx = -2;
export let invaderDy = 10;

function moveInvaders(secondsPassed: number) {
  let leftX = invaders[0].x;
  let rightX = invaders[invaders.length - 1].x;
  if (leftX <= 20 || rightX >= 440) invaderDx = -invaderDx;
  invaders.forEach((inv) => inv.move(invaderDx, secondsPassed * invaderDy));
}

function update(secondsPassed) {
  moveInvaders(secondsPassed);
  moveShots(secondsPassed);

  if (
    ship.isShotBy(invaderShot) ||
    invaders.some((inv) => ship.isHitting(inv))
  ) {
    alert("Game OVER!");
    init();
  }
}

export default update;
