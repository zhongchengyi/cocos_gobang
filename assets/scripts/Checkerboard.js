const UserEvent = require('UserEvent')

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

        // this._graphics.lineWidth = 1;
        // this._graphics.strokeColor = cc.Color.BLACK;

        let width = this.node.width;
        let height = this.node.height;

        let step = 100;
        for (let x = -width / 2; x <= width / 2; x += step) {
            this._graphics.moveTo(x, height / 2);
            this._graphics.lineTo(x, -height / 2);
        }
        for (let y = -height / 2; y <= height / 2; y += step) {
            this._graphics.moveTo(width / 2, y);
            this._graphics.lineTo(-width / 2, y);
        }
        this._graphics.stroke();

        let r = 10;
        this._graphics.circle(0, 0, r);
        this._graphics.fill();

        this.node.on(cc.Node.EventType.MOUSE_DOWN, event => {
            this.node.emit(UserEvent.dropChessSuccess, {})
        });
    },

    start() {

    },

    update(dt) {
    },
});
