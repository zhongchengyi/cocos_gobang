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
    },

    _switchCurrentPlayer() {
        if (this.currentPlyer === this.players[0]) {
            this.currentPlyer = this.players[1];
        } else {
            this.currentPlyer = this.players[0];
        }
    },

    start() {

    },

    /**
     * 下棋确定
     * @param x
     * @param y
     */
    onDropChessSuccess: function ({x, y} = {}) {
        this.checkerboard.showChess({x, y, chess: this.currentPlyer.createChess()});
        this._switchCurrentPlayer();
        //TODO player 显棋子，判断输赢
    },


    // update (dt) {},
});
