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
            default: null,
            tooltip: '棋盘'
        },
        controlboard: {
            type: cc.Node,
            default: null,
            tooltip: '控制面板'
        },
        /**
         * 第一个玩家
         */
        player1: {
            type: Player,
            default: null,
            tooltip: '第一个玩家'
        },
        /**
         * 第二个玩家
         */
        player2: {
            type: Player,
            default: null,
            tooltip: '第二个玩家'
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
