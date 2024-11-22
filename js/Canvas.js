import CheckTypeOf from "./CheckTypeOf.js";
import Player from "./Player.js";
import SysLogInfo from "./SysLogInfo.js";
import World from "./World.js";

/**@class */
export default class Canvas {
    /**@private @type {SystemLog} */
    _systemLog;
    /**@private @type {World} */
    _world;
    /**@private @type {HTMLCanvasElement} */
    _canvas;
    /**@private @type {CanvasRenderingContext2D} */
    _ctx;

    /**
     * @param {SysLogInfo} systemLog 
     */
    constructor(systemLog, world) {
        if (CheckTypeOf.obj(systemLog) && CheckTypeOf.obj(world)) {
            this._systemLog = systemLog;
            this._world = world;
        } else {
            CheckTypeOf.logTypeError();
        }

        this._init();
    }

    /**@private */
    _init() {
        try {
            this._canvas = document.getElementById('canvas');
            this._ctx = this._canvas.getContext('2d');
            this._systemLog.log('Объект Canvas инициализирован.')
        } catch (error) {
            throw new Error();
        }
    }

    /**@public */
    draw() {
        try {
            this._clearCanvas();
            this._colorCanvas('#111');
            let objectWorld = this._world.getObjectArr();
            for (let index = 0; index < objectWorld.length; index++) {
                if (objectWorld[index].getSpritePath() === '') {
                    this._rect(
                        'white',
                        objectWorld[index].getXPosition(),
                        objectWorld[index].getYPosition(),
                        objectWorld[index].getWidth(),
                        objectWorld[index].getHeight(),
                    )     
                }
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * @param {string} color
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height     
     * @private */
    _rect(color, x, y, width, height) {
        if (CheckTypeOf.str(color) && CheckTypeOf.num(x) && CheckTypeOf.num(y) &&
            CheckTypeOf.num(width) && CheckTypeOf.num(height)) {
                this._ctx.fillStyle = color;
                this._ctx.fillRect(x, y, width, height);
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**
     * @param {string} color
     * @private 
     */
    _colorCanvas(color) {
        if (CheckTypeOf.str(color)) {
            this._ctx.fillStyle = color;
            this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**@private */
    _clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}