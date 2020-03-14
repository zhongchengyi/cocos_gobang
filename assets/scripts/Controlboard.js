const Player = require('Player')

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
        //TODO player 显棋子，判断输赢
    }

    // update (dt) {},
});
