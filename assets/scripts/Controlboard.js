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
        chessPrefab: {
            type: cc.Prefab,
            default: null,
            tooltip: '棋子的预制体'
        }
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
        })

        if (!this.chessPrefab) {
            cc.loader.loadRes('Piece', (err, res) => {
                this.chessPrefab = res;
            });
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
        console.log(arguments)


        this.checkerboard.showChess({x, y, prefab: this.chessPrefab});
        //TODO player 显棋子，判断输赢
    },


    // update (dt) {},
});
