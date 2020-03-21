const ChessType = require('../ChessType');
const linq = require('../linq');

/**
 * 棋盘的算法
 */
class SimpleBoard {
    init(size) {

        this.cache = {
            [ChessType.white]: [],
            [ChessType.black]: []
        }
    }

    put({x, y, role: chessType}) {
        console.log(`x: ${x}, y: ${y}, type: ${chessType}`);
        this.cache[chessType].push({x, y});
        return this._findFive({x, y, chessType});
    }

    _findFive({x, y, chessType}) {
        let locs = this.cache[chessType];

        let five = linq.from(locs).where(w => w.x === x && Math.abs((w.y - y)) <= 5).toArray();

        if (five.length === 5) {
            return five;
        }

        five = linq.from(locs).where(w => w.y === y && Math.abs((w.x - x)) <= 5).toArray();

        if (five.length === 5) {
            return five;
        }

        let a = y - x;

        five = linq.from(locs).where(w => w.y - w.x === a && Math.abs(w.x - x) <= 5
            && Math.abs(x.y - y) <= 5)
            .toArray();
        if (five.length === 5) {
            return five;
        }

        return false;
    }

}

export default SimpleBoard;