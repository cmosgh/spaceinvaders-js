import { canvas } from "./canvas";
import { shipShots } from "../shots-controller";
import { ship } from "./objects";

const addAllEventListeners = () => {
  canvas.addEventListener("mousemove", function (e) {
    ship.x = e.offsetX - 20;
  });
  canvas.addEventListener("mousedown", function (_e) {
    if (shipShots.length < 3) {
      shipShots.push(ship.shoot(-20, "#F00"));
    }
  });
};

export default addAllEventListeners;
