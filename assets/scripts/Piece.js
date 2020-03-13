/**
 * @file 棋子
 */
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._graphics = this.getComponent(cc.Graphics);
        this._graphics.circle(0, 0, 35);
        this._graphics.fill();
    },

    start() {

    },

    // update (dt) {},
});
