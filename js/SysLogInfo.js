import CheckTypeOf from "./CheckTypeOf.js";

/**@class */
export default class SysLogInfo {
    /**@private @type {boolean} */
    _debugMode;
    
    /**
     * @param {boolean} debugMode 
     */
    constructor(debugMode) {
        if (CheckTypeOf.bool(debugMode)) {
            this._debugMode = debugMode;
            this._init();
        } else {
            CheckTypeOf.logTypeError();
        }
    }

    /**@private */
    _init() {
        if (this._debugMode === true) {
            console.info('Инициализации системы логов.');
        }
    }

    /**
     * @param {string} message 
     * @public */
    log(message) {
        if (CheckTypeOf.str(message)) {
            if (this._debugMode === true) {
                console.info(message);
            }
        } else {
            CheckTypeOf.logTypeError();
        }
    }
}