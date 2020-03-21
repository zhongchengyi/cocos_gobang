// noinspection JSUnusedGlobalSymbols
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},

    onClickStart() {
        cc.director.loadScene('game');
    }
});
