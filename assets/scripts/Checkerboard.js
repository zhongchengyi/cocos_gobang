// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

/**
 * 棋盘
 */
cc.Class({

    /**
     * @type {cc.Graphics}
     */
    _graphics: null,

    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        /**
         * @type {cc.Graphics}
         */
        this._graphics = this.getComponent(cc.Graphics);
        //添加颜色及透明度
        this._graphics.fillColor = cc.Color.RED;

        this._graphics.lineWidth = 1;
        this._graphics.strokeColor = cc.Color.GRAY;

        let width = this.node.parent.width;
        let height = this.node.parent.height;

        let step = 40;
        for (let x = -width / 2; x < width / 2; x += step) {
            this._graphics.moveTo(x, height / 2);
            this._graphics.lineTo(x, -height / 2);
        }
        for (let y = -height / 2; y < height / 2; y += step) {
            this._graphics.moveTo(width / 2, y);
            this._graphics.lineTo(-width / 2, y);
        }

        this._graphics.stroke();

        let r = 10;
        this._graphics.circle(0, 0, r);
        this._graphics.fill();

    },

    start() {


    },

    update(dt) {
    },
});
