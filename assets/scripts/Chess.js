import FlickerAction from "./FlickerAction";

const ChessType = require('ChessType');


/**
 * @file 棋子
 */
cc.Class({
    extends: cc.Component,

    properties: {
        bgWhite: {
            type: cc.Sprite,
            default: null,
        },
        bgBlack: {
            type: cc.Sprite,
            default: null
        },
        chessType: {
            type: ChessType,
            default: ChessType.white,
            notify() {
                this._updateByType();
            }
        },
        flicker: {
            default: false,
            notify() {
                if (this.flicker) {
                    FlickerAction.runFlicker(this.node)
                } else {
                    FlickerAction.stopFlicker(this.node)
                }
            }
        }
    },

    _updateByType() {
        switch (this.chessType) {
            case ChessType.white:
                if (this.bgWhite) {
                    this.bgWhite.node.active = true;
                }
                if (this.bgBlack) {
                    this.bgBlack.node.active = false;
                }
                break;
            case ChessType.black:
                if (this.bgWhite) {
                    this.bgWhite.node.active = false;
                }
                if (this.bgBlack) {
                    this.bgBlack.node.active = true;
                }
                break;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._graphics = this.getComponent(cc.Graphics);
        this._graphics.circle(0, 0, 35);
        this._graphics.fill();
        this._updateByType();
    },

    start() {

    },

    update(dt) {
    },
});
