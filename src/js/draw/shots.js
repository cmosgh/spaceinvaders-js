import { invaderShot, shipShots } from "../shots-controller";
import { ctx } from "../init/init";

const drawShots = () => {
  invaderShot && invaderShot.draw(ctx);
  shipShots && shipShots.map((ss) => ss.draw(ctx));
};

export default drawShots;
