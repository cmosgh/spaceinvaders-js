import {invaders} from "../init/objects";
import {ctx} from "../init/init";

const drawInvaders = ()=>{
    invaders.forEach((inv) => inv.draw(ctx));
}

export default drawInvaders