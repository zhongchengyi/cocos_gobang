import SimpleBoard from "./simple/SimpleBoard";

class BoardFacade {

    constructor() {
        this.board = new SimpleBoard();
    }

    init(size) {
        this.board.init(size);
    }

    /**
     * 下棋
     * @param {int} x
     * @param {int} y
     * @param {ChessType} chessType
     * @return {false|[{x,y}]} 五子或失败
     */
    put({x, y, chessType}) {
        return this.board.put({x, y, role: chessType});
    }
}

export default BoardFacade;