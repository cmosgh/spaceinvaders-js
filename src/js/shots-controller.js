import { invaders } from "./init/objects";

export let invaderShot,
  shipShots = [];

export function moveShots() {
  if (invaderShot && !invaderShot.move()) {
    invaderShot = null;
  }

  if (!invaderShot) {
    let activeInvaders = invaders.filter((i) => i.active);
    if (activeInvaders.length) {
      let selectedInvader =
        activeInvaders[Math.floor(Math.random() * activeInvaders.length)];
      invaderShot = selectedInvader.shoot(20);
    }
  }

  shipShots.forEach((ss, index) => {
    if (!ss.move()) {
      shipShots.splice(index, 1);
    } else {
      const hitInvaders = invaders.filter((i) => i.isHitBy(ss));
      if (hitInvaders.length) {
        hitInvaders.forEach((i) => (i.active = false));
        shipShots.splice(index, 1);
      }
    }
  });
}
