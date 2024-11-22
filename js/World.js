import CheckTypeOf from "./CheckTypeOf.js";
import SysLogInfo from "./SysLogInfo.js";

/**@class */
export default class World {
    /**@private @type {string} */
    _name;
    /**@private @type {number} */
    _time;
    /**@private @type {number} */
    _gravity;
    /**@private @type {SysLogInfo} */
    _sysLogInfo;
    /**@private @type {Array} */
    _objectArr = [];

    constructor(name, time, gravity, sysLogInfo) {
        if (CheckTypeOf.str(name) && CheckTypeOf.num(time) && CheckTypeOf.num(gravity) &&
            CheckTypeOf.obj(sysLogInfo)) {
            this._name = name;
            this._time = time;
            this._gravity = gravity;
            this._sysLogInfo  = sysLogInfo;

            this._init();
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**@private */
    _init() {
        this._sysLogInfo.log(`Объект ${this._name} инициализирован.`)
    }

    /**
     * @param {object} object 
     * @public */
    addObject(object) {
        if (CheckTypeOf.obj(object)) {
            this._objectArr.push(object);
            this._sysLogInfo.log(`Добавлен новый объект ${object} в массив мира ${this._name}`);
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**@public @returns {Array} */
    getObjectArr() {
        return this._objectArr;
    }

    /**@public @returns {number} */
    getTime() {
        return this._time;
    }

    /**@public @returns {number} */
    getGravity() {
        return this._gravity();
    }
}