'use strict';

import Canvas from "./Canvas.js";
import ControlKeyboard from "./ControlKeyboard.js";
import Player from "./Player.js";
import SysLogInfo from "./SysLogInfo.js";
import World from "./World.js";

/**@class */
class Main {
    /**@private @type {boolean} */
    _debugMode = true;

    constructor() {
        this._init();
    }

    /**@private */
    _init() {
        let debugMode = true;
        let sysLogInfo = new SysLogInfo(debugMode);
        let world = new World('Test world', 1, 0.5, sysLogInfo);
        let player = new Player('Adam', 10, 100, 10, 10, '', sysLogInfo, world);
        let controlKeyboard = new ControlKeyboard(sysLogInfo, player);
        let canvas = new Canvas(sysLogInfo, world);

        world.addObject(player);

        this._run(canvas);
    }

    /**
     * @param {Canvas} canvas 
     * @private */
    _run(canvas) {
        
        let animate = () => {
 
            canvas.draw();

            requestAnimationFrame(animate);
        }

        animate();
    }
}

new Main();