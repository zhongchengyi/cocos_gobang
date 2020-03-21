const ChessType = require('ChessType');
/**
 *玩家
 */
cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: {
            type: cc.Label,
            default: null
        },
        playerName: {
            default: "玩家名",
            tooltip: '玩家名字',
            notice() {
                if (this.nameLabel) {
                    this.nameLabel.string = this.playerName;
                }
            }
        },
        chessPrefab: {
            type: cc.Prefab,
            default: null,
            tooltip: '棋子的预制体',
        },
        chessType: {
            type: ChessType,
            default: ChessType.white,
            tooltip: '棋子的颜色',
        },
        thinking: {
            default: false,
            tooltip: '思考中',
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (this.nameLabel) {
            this.nameLabel.string = this.playerName;
            this.nameLabel.color = this.node.color;
        }
        this.node.on(cc.Node.EventType.MOUSE_DOWN, e => {
            this.node.off(cc.Node.EventType.MOUSE_DOWN);
            this.node.emit('user-decision', {player: this})
        });


        this.nameLabel.node.runAction(cc.sequence(
            cc.tintTo(2, 255, 0, 0),
            cc.delayTime(0.5),
            cc.fadeOut(0.5),
            cc.delayTime(0.5),
            cc.fadeIn(0.5),
            cc.delayTime(0.5),
            cc.tintTo(2, 255, 255, 255)
        ).repeat(2));
    },

    start() {
    },

    update(dt) {

    },

    /**
     * 创建当前玩家的棋子
     * @returns {cc.Node}
     */
    createChess() {
        let chess = cc.instantiate(this.chessPrefab);
        let script = chess.getComponent('Chess');
        script.chessType = this.chessType;
        return chess;
    }
});
