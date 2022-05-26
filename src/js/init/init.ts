import { canvas } from "./canvas";
import addAllEventListeners from "./event-listeners";
import { initInvaders, initShipShots } from "./objects";

addAllEventListeners();

export const ctx = canvas.getContext("2d");

export default function init() {
  initShipShots();
  initInvaders();
}
