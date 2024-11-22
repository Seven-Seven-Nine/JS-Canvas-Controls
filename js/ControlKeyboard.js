import CheckTypeOf from "./CheckTypeOf.js";
import Player from "./Player.js";
import SysLogInfo from "./SysLogInfo.js";

/**@class */
export default class ControlKeyboard {
    /**@private @type {boolean} */ _w = false;
    /**@private @type {boolean} */ _a = false;
    /**@private @type {boolean} */ _s = false;
    /**@private @type {boolean} */ _d = false;
    /**@private @type {boolean} */ _isWActive = false;
    /**@private @type {boolean} */ _isAActive = false;
    /**@private @type {boolean} */ _isSActive = false;
    /**@private @type {boolean} */ _isDActive = false;
    /**@private @type {SysLogInfo} */ _sysLogInfo;
    /**@private @type {Player} */ _player;

    /**
     * @param {SysLogInfo} sysLogInfo
     * @param {Player} player 
     * */
    constructor(sysLogInfo, player) {
        if (CheckTypeOf.obj(sysLogInfo) && CheckTypeOf.obj(player)) {
            this._sysLogInfo = sysLogInfo;
            this._player = player;
            this._init();
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**@private */
    _init() {
        this._sysLogInfo.log('Объект ControlKeyboard инициализирован.');
        this._checkKeyDown();
    }

    /**@private */
    _checkKeyDown() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'w':
                    this._w = true;
                    this._timerCaseW();
                    break;
                case 'a':
                    this._a = true;
                    this._timerCaseA();
                    break;
                case 's':
                    this._s = true;
                    this._timerCaseS();
                    break;
                case 'd':
                    this._d = true;
                    this._timerCaseD();
                    break;
                default: 
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'w':
                    this._w = false;
                    break;
                case 'a':
                    this._a = false;
                    break;
                case 's':
                    this._s = false;
                    break;
                case 'd':
                    this._d = false;
                    break;
                default:
                    break;
            }
        });
    }

    /**@private */
    _timerCaseW() {
        if (this._isWActive) return;
        this._isWActive = true;

        let timer = setInterval(() => {
            this._player.moveUp();

            if (this._w === false) {
                clearInterval(timer);
                this._isWActive = false;
            }
        }, 10);
    }

    /**@private */
    _timerCaseA() {
        if (this._isAActive) return;
        this._isAActive = true;

        let timer = setInterval(() => {
            this._player.moveLeft();

            if (this._a === false) {
                clearInterval(timer);
                this._isAActive = false;
            }
        }, 10);
    }

    /**@private */
    _timerCaseS() {
        if (this._isSActive) return;
        this._isSActive = true;

        let timer = setInterval(() => {
            this._player.moveDown();

            if (this._s === false) {
                this._isSActive = false;
                clearInterval(timer);
            }
        }, 10);
    }

    /**@private */
    _timerCaseD() {
        if (this._isDActive) return;
        this._isDActive = true;

        let timer = setInterval(() => {
            this._player.moveRight();

            if (this._d === false) {
                this._isDActive = false;
                clearInterval(timer);
            }
        }, 10);
    }
}