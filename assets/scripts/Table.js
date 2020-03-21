const Checkerboard = require('Checkerboard');
const UserEvent = require('UserEvent');

cc.Class({
    extends: cc.Component,

    properties: {
        checkerboard: {
            type: Checkerboard,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, e => {
            let delta = e.touch.getDelta();
            this.node.x += delta.x;
            this.node.y += delta.y;
        });

        this.checkerboard.node.on(UserEvent.dropChessSuccess, event => {
        })
    },

    // update (dt) {},
});
