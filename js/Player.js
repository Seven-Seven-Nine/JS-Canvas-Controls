import CheckTypeOf from "./CheckTypeOf.js";
import SysLogInfo from "./SysLogInfo.js";
import World from "./World.js";

export default class Player {
    /**@private @type {string} */
    _name
    /**@private @type {number} */
    _xPosition;
    /**@private @type {number} */
    _yPosition;
    /**@private @type {number} */
    _width;
    /**@private @type {number} */
    _height;
    /**@private @type {string} */
    _spritePath;
    /**@private @type {SysLogInfo} */
    _sysLogInfo;
    /**@private @type {World} */
    _world;

    /**
     * @param {string} name 
     * @param {number} xPosition 
     * @param {number} yPosition 
     * @param {number} width 
     * @param {number} height 
     * @param {string} spritePath 
     * @param {SysLogInfo} sysLogInfo
     * @param {World} world 
     */
    constructor(name, xPosition, yPosition, width, height, spritePath, sysLogInfo, world) {
        if (CheckTypeOf.str(name) && CheckTypeOf.num(xPosition) && CheckTypeOf.num(yPosition) 
            && CheckTypeOf.num(width) && CheckTypeOf.num(height) && CheckTypeOf.str(spritePath)
            && CheckTypeOf.obj(sysLogInfo) && CheckTypeOf.obj(world)) {
                this._name = name;
                this._xPosition = xPosition;
                this._yPosition = yPosition;
                this._width = width;
                this._height = height;
                this._spritePath = spritePath;
                this._sysLogInfo = sysLogInfo;
                this._world = world;

                this._init();
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**@private */
    _init() {
        this._sysLogInfo.log(`Объект Player ${this._name} инициализирован.`);

        this._animate();
    }

    /**@private */
    _animate() {
        // this._live();
        requestAnimationFrame(() => this._animate());
    }

    /**@private */
    _live() {
        this._xPosition += this._world.getTime();
        if (this._xPosition > 350) this._xPosition = -50;
    }

    /**@public */
    moveUp() {
        this._yPosition -= this._world.getTime();
    }

    /**@public */
    moveLeft() {
        this._xPosition -= this._world.getTime();
    }

    /**@public */
    moveDown() {
        this._yPosition += this._world.getTime();
    }
    
    /**@public */
    moveRight() {
        this._xPosition += this._world.getTime();
    }

    /**@public @returns {number} */
    getXPosition() {
        return this._xPosition;
    }

    /**@public @returns {number} */
    getYPosition() {
        return this._yPosition;
    }

    /**@public @returns {number} */
    getWidth() {
        return this._width;
    }

    /**@public @returns {number} */
    getHeight() {
        return this._height;
    }

    /**@public @returns {string} */
    getSpritePath() {
        return this._spritePath;
    }

    /**
     * @param {number} xPosition
     * @public 
     */
    setXPosition(xPosition) {
        if (CheckTypeOf.num(xPosition)) {
            this._xPosition = xPosition;
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**
     * @param {number} yPosition
     * @public 
     */
    setYPosition(yPosition) {
        if (CheckTypeOf.num(yPosition)) {
            this._yPosition = yPosition;
        } else {
            CheckTypeOf.logTypeError();
        }
    }
}