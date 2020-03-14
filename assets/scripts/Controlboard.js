/**
 * 控制面板
 */
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on('current-user-changed', e => {
            console.log(arguments)
        })
    },

    start() {

    },

    // update (dt) {},
});
