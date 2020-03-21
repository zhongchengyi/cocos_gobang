import PlayerWinState from "./states/PlayerWinState";

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
        winSprite: {
            type: cc.Sprite,
            default: null,
        },
        chessHost: {
            type: cc.Node,
            default: null,
            notify() {
                this._updateChessState();
            }
        },
        playerName: {
            default: "玩家名",
            tooltip: '玩家名字',
            notify() {
                if (this.nameLabel) {
                    this.nameLabel.string = this.playerName;
                }
            }
        },
        chessPrefab: {
            type: cc.Prefab,
            default: null,
            tooltip: '棋子的预制体',
            notify() {
                this._updateChessState();
            }
        },
        chessType: {
            type: ChessType,
            default: ChessType.white,
            tooltip: '棋子的颜色',
            notify() {
                this._updateChessState();
            }
        },
        thinking: {
            default: false,
            tooltip: '思考中',
            notify() {
                if (!this.thinkingAction) {
                    this.thinkingAction = cc.sequence(
                        cc.tintTo(2, 255, 0, 0),
                        // cc.delayTime(0.1),
                        // cc.fadeOut(0.1),
                        // cc.delayTime(0.1),
                        // cc.fadeIn(0.1),
                        // cc.delayTime(0.1),
                        cc.tintTo(2, 255, 255, 255),
                        // cc.delayTime(0.1)
                    ).repeatForever();
                }
                if (this.thinking) {
                    this.nameLabel.node.runAction(this.thinkingAction);
                } else {
                    if (this.nameLabel.node.getNumberOfRunningActions() > 0) {
                        this.nameLabel.node.stopAction(this.thinkingAction);
                    }
                }
            }
        },

        /**
         * 玩家的胜利状态
         */
        playWinState: {
            type: PlayerWinState,
            default: PlayerWinState.none,
            tooltip: '玩家状态',
            notify() {
                this._updateWinState();
            }
        }
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

        this._updateWinState();
        this._updateChessState();
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
        return {chess, chessType: script.chessType};
    },

    _updateChessState() {
        if (this.chessHost && this.chessPrefab && this.chessType !== null) {
            let chess = this.createChess().chess;
            // chess.width = 100;
            // chess.height = 100;
            this.chessHost.removeAllChildren();
            this.chessHost.addChild(chess);
        }
    },

    _updateWinState() {
        this._clearState();
        switch (this.playWinState) {
            case PlayerWinState.none:
                break;
            case PlayerWinState.win:
                this.winSprite.node.active = true;
                break;
            case PlayerWinState.lose:
                break;
            case PlayerWinState.draw:
                break;
        }
    },
    _clearState() {
        this.winSprite.node.active = false;
    },

    clear() {
        this._clearState();
    }
});
