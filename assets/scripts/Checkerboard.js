const UserEvent = require('UserEvent')
const Utils = require('Utils');

/**
 * 棋盘
 */
cc.Class({

    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    /**
     * @type {cc.Graphics}
     */
    _graphics: null,

    onLoad() {

        this.step = 100;

        /**
         * @type {cc.Graphics}
         */
        this._graphics = this.getComponent(cc.Graphics);

        let width = this.node.width;
        let height = this.node.height;

        let step = this.step;
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

        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickBoard.bind(this));
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onClickBoard.bind(this));

    },

    /**
     * @fires UserEvent.dropChessSuccessEvent
     * @param event
     */
    onClickBoard(event) {
        let pos = Utils.getGameLocation({event, node: this.node});
        let px = this._calcLocationIndex(pos);
        console.log(`${new Date().getTime()}: pos: ${pos}, idx : ( ${px.ix}, ${px.iy})`);
        this.node.emit(UserEvent.dropChessSuccess, {x: px.ix, y: px.iy});
    },

    start() {

    },

    update(dt) {
    },

    _calcLocationIndex({x, y} = {}) {
        return {
            ix: parseInt(x / this.step) + ((Math.abs(x % this.step) > this.step / 2) ? (x > 0 ? 1 : -1) : 0),
            iy: parseInt(y / this.step) + ((Math.abs(y % this.step) > this.step / 2) ? (y > 0 ? 1 : -1) : 0),
            toString: function () {
                return `(${this.ix}, ${this.iy})`
            }
        }
    },


    /**
     *
     * @param {int} x
     * @param {int} y
     * @param {cc.Prefab} prefab
     */
    showChess({x, y, prefab} = {}) {
        let chess = cc.instantiate(prefab);
        chess.x = x * this.step;
        chess.y = y * this.step;
        this.node.addChild(chess);
    }
});
