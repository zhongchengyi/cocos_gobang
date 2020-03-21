const linq = require('linq')

/**
 * 棋盘的算法
 */
class Board {
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
    }

    put({x, y, chessType}) {
        console.log(`x: ${x}, y: ${y}, type: ${chessType}`);
    }

}

export default Board;