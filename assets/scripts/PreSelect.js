import FlickerAction from "./FlickerAction";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        /**
         * @type {cc.Graphics}
         */
        this._graphics = this.getComponent(cc.Graphics);

        let size = Math.min(this.node.width, this.node.height);

        let x = [-size / 2, -size / 2 / 3, size / 2 / 3, size / 2];
        let y = [size / 2, size / 2 / 3, -size / 2 / 3, -size / 2];

        this._graphics.moveTo(x[0], y[0]);
        this._graphics.lineTo(x[0], y[1]);

        this._graphics.moveTo(x[0], y[2]);
        this._graphics.lineTo(x[0], y[3]);
        this._graphics.lineTo(x[1], y[3]);

        this._graphics.moveTo(x[2], y[3]);
        this._graphics.lineTo(x[3], y[3]);
        this._graphics.lineTo(x[3], y[2]);

        this._graphics.moveTo(x[3], y[1]);
        this._graphics.lineTo(x[3], y[0]);
        this._graphics.lineTo(x[2], y[0]);

        this._graphics.moveTo(x[1], y[0]);
        this._graphics.lineTo(x[0], y[0]);

        this._graphics.stroke();
        FlickerAction.runFlicker(this.node);

    },

    start() {

    },

    // update (dt) {},
});
