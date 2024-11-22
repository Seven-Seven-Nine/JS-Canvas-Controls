/**@class @static*/
export default class CheckTypeOf {
    /**
     * @param {number} parameter 
     * @public @static @returns {boolean}*/
    static num(parameter) {
        if (typeof parameter !== 'number') {
            return false;
        } else {
            return true;
        }
    }

    /**
     * @param {boolean} parameter 
     * @public @static @returns {boolean} */
    static bool(parameter) {
        if (typeof parameter !== 'boolean') {
            return false;
        } else {
            return true;
        }
    }

    /**
     * @param {string} parameter 
     * @public @static @returns {boolean} 
     */
    static str(parameter) {
        if (typeof parameter !== 'string') {
            return false;
        } else {
            return true;
        }
    }

    /**
     * @param {object} parameter 
     * @public @static @returns {boolean} 
     */
    static obj(parameter) {
        if (typeof parameter !== 'object') {
            return false;
        } else {
            return true;
        }
    }

    /**
     * @public @static */
    static logTypeError() {
        throw new TypeError('Ошибка типа параметра!');
    }
}