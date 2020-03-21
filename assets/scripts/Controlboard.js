import BoardFacade from "./BoardFacade";
import Config from './Config'
import UserEvent from "./UserEvent";

const Player = require('Player')
const Checkerboard = require('Checkerboard')

/**
 * 控制面板
 */
cc.Class({
    extends: cc.Component,

    properties: {
        players: {
            type: Player,
            default: [],
            tooltip: '所有的玩家'
        },
        checkerboard: {
            type: Checkerboard,
            default: null,
            tooltip: '棋盘， 用于更新棋子'
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on('current-user-changed', e => {
            console.log(arguments)
        });

        this.players.forEach(e => {
            e.node.on('user-decision', (event) => {
                console.log(arguments)
            })
        });

        /**
         * @type {Player}
         */
        this.currentPlyer = this.players[0];

        this.board = new BoardFacade();
        this.board.init(Config.board.size)
    },

    _switchCurrentPlayer() {
        if (this.currentPlyer === this.players[0]) {
            this.currentPlyer = this.players[1];
        } else {
            this.currentPlyer = this.players[0];
        }
    },

    start() {
        this._clear();
    },

    /**
     * 下棋确定
     * @param x
     * @param y
     */
    onDropChessSuccess: function ({x, y} = {}) {
        if (this.winner) {
            return;
        }
        this.checkerboard.showChess({x, y, ...this.currentPlyer.createChess()});
        let rlt = this.board.put({x, y, chessType: this.currentPlyer.chessType});
        if (rlt && rlt.length >= 5) {
            console.log('win')
            this.winner = {player: this.currentPlyer, chesses: rlt};
            this.node.emit(UserEvent.gameOver, {...this.winner});
        }
        this._switchCurrentPlayer();
        //TODO player 显棋子，判断输赢
    },

    _clear() {
        this.winner = null;
    }

    // update (dt) {},
});
