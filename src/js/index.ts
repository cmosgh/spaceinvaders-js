import init from "./init/init";
import gameLoop from "./game-loop";
import raf from "raf";

function start() {
  init();
  raf(function tick(timestamp) {
    gameLoop(timestamp);
    raf(tick);
  });
}

window.addEventListener("load", start);
