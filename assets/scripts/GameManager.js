const Checkerboard = require('Checkerboard')
const Player = require('Player');

cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 棋盘
         */
        checkerboard: {
            type: Checkerboard,
            default: null
        },
        /**
         * 第一个玩家
         */
        player1: {
            type: Player,
            default: null
        },
        /**
         * 第二个玩家
         */
        player2: {
            type: Player,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
