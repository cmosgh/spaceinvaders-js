import update from "./update";
import draw from "./draw";

let oldTimestamp = 0

function gameLoop(timestamp) {
  const secondsPassed = (timestamp - oldTimestamp) / 1000
  oldTimestamp = timestamp
  update(secondsPassed);
  draw();
}

export default gameLoop;
