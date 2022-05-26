import GameObject from "../models/game-object";
import { shipShots } from "../shots-controller";

let shipX = 230;

export const ship = new GameObject(shipX, 550, document.getElementById("ship"));
export let invaders = [];

export const initInvaders = () => {
  invaders.splice(0, invaders.length);
  const alienImg = document.getElementById("alien");
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 8; x++) {
      invaders.push(new GameObject(50 + x * 50, 20 + y * 50, alienImg));
    }
  }
};

export const initShipShots = () => {
  shipShots.splice(0, shipShots.length);
};
