import { invaders } from "./init/objects";
import Ammo from "./models/ammo";

export let invaderShot: Ammo,
  shipShots: Ammo[] = [];

export function moveShots(secondsPassed: number) {
  if (invaderShot && !invaderShot.move(secondsPassed)) {
    invaderShot = null;
  }

  if (!invaderShot) {
    let activeInvaders = invaders.filter((i) => i.active);
    if (activeInvaders.length) {
      let selectedInvader =
        activeInvaders[Math.floor(Math.random() * activeInvaders.length)];
      invaderShot = selectedInvader.shoot(300);
    }
  }

  shipShots.forEach((ss, index) => {
    if (!ss.move(secondsPassed)) {
      shipShots.splice(index, 1);
    } else {
      const hitInvaders = invaders.filter((i) => i.isShotBy(ss));
      if (hitInvaders.length) {
        hitInvaders.forEach((i) => (i.active = false));
        shipShots.splice(index, 1);
      }
    }
  });
}
