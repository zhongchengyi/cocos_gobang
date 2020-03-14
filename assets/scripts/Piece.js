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
        bgType: {
            default: "white",
            notice() {
                this._updateByType();
            }
        }
    },

    _updateByType() {
        switch (this.bgType) {
            case 'white':
                if (this.bgWhite) {
                    this.bgWhite.active = true;
                }
                if (this.bgBlack) {
                    this.bgBlack.active = false;
                }
                break;
            case 'black':
                if (this.bgWhite) {
                    this.bgWhite.active = false;
                }
                if (this.bgBlack) {
                    this.bgBlack.active = true;
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
