import drawCanvas from "./canvas";
import drawShots from "./shots";
import drawInvaders from "./invaders";
import drawShip from "./ship";

function draw() {
  drawCanvas();
  drawShots();
  drawInvaders();
  drawShip();
}

export default draw;
