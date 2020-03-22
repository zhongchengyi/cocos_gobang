import FlickerAction from "./FlickerAction";

const UserEvent = require('UserEvent')
const Utils = require('Utils');
const ChessType = require('ChessType')

/**
 * 棋盘
 */
cc.Class({

    extends: cc.Component,

    properties: {
        preSelect: {
            type: cc.Node,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    /**
     * @type {cc.Graphics}
     */
    _graphics: null,

    onLoad() {
        this.step = 100;
        //[x][y] chesstype
        this.chessMap = {};
        //
        /**
         * @type {cc.Graphics}
         */
        this._graphics = this.getComponent(cc.Graphics);

        let size = Math.min(this.node.width, this.node.height);
        let step = this.step;

        for (let x = -size / 2; x <= size / 2; x += step) {
            this._graphics.moveTo(x, size / 2);
            this._graphics.lineTo(x, -size / 2);
        }
        for (let y = -size / 2; y <= size / 2; y += step) {
            this._graphics.moveTo(size / 2, y);
            this._graphics.lineTo(-size / 2, y);
        }
        this._graphics.stroke();

        let r = 10;
        this._graphics.circle(0, 0, r);
        this._graphics.fill();

        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickBoard.bind(this));

    },

    /**
     * @fires UserEvent.dropChessSuccessEvent
     * @param event
     */
    onClickBoard(event) {
        let pos = Utils.getGameLocation({event, node: this.node});
        let px = this._calcLocationIndex(pos);
        if (this.preSelect.x === px.ix * this.step && this.preSelect.y === px.iy * this.step) {
            if (this.winner) {
                return;
            }
            if (this.chessMap[px.ix] && this.chessMap[px.ix][px.iy]) {
                return;
            }
            this.node.emit(UserEvent.dropChessSuccess, {x: px.ix, y: px.iy});
        } else {
            this.preSelect.x = px.ix * this.step;
            this.preSelect.y = px.iy * this.step;
        }

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
     * @param {cc.Node} chess
     * @param {ChessType} chessType
     */
    showChess({x, y, chess, chessType} = {}) {
        chess.x = x * this.step;
        chess.y = y * this.step;
        if (!this.chessMap[x]) {
            this.chessMap[x] = {};
        }
        this.chessMap[x][y] = {chess, chessType};
        this.node.addChild(chess);
    },

    /**
     *
     * @param {Array} chesses
     */
    flickerChesses(chesses) {
        if (chesses && chesses.length > 0) {
            chesses.forEach(e => {
                FlickerAction.runFlicker(this.chessMap[e.x][e.y].chess)
            })
        }
    }
});
