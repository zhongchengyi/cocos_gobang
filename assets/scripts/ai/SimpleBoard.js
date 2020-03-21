import Role from "./role";

const linq = require('../linq')

/**
 * 棋盘的算法
 */
class SimpleBoard {
    /**
     *
     * @param {int} size 棋盘的大小
     */
    constructor(size) {

        /**
         * 白棋的分
         */
        this.whiteScore = linq.repeat(linq.repeat(0, size).toArray(), size).toArray()
        /**
         * 黑旗的分
         */
        this.blackScore = linq.repeat(linq.repeat(0, size).toArray(), size).toArray()

        /**
         * 棋盘内容
         */
        this.borad = linq.repeat(linq.repeat(0, size).toArray(), size).toArray()

        this.cache = {
            [Role.com]: [],
            [Role.hum]: []
        }
    }

    put({x, y, role}) {
        console.log(`x: ${x}, y: ${y}, type: ${role}`);
        this.cache[role][x][y] = 1;
    }


}

export default SimpleBoard;