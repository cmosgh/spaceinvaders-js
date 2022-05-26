import init from "./init/init";
import gameLoop from "./game-loop";

const frames = 60;

function start() {
  init();
  const repeatInterval = 1000 / frames;
  const runLoop = () => {
    gameLoop();
    setTimeout(runLoop, repeatInterval);
  };
  runLoop();
}

window.addEventListener("load", start);
