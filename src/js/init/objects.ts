import { shipShots } from "../shots-controller";
import InvaderModel from "../models/InvaderModel";
import ShipModel from "../models/ShipModel";

let shipX = 230;
const shipImage = document.getElementById("ship") as HTMLImageElement;

export const ship = new ShipModel(shipX, 550, shipImage);
export const invaders: InvaderModel[] = [];

export const initInvaders = () => {
  invaders.splice(0, invaders.length);
  const alienImg = document.getElementById("alien") as HTMLImageElement;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 8; x++) {
      invaders.push(new InvaderModel(50 + x * 50, 20 + y * 50, alienImg));
    }
  }
};

export const initShipShots = () => {
  shipShots.splice(0, shipShots.length);
};
