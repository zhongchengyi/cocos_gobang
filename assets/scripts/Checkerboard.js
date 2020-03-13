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
    extends: cc.Component,

    properties: {
        graphics: {
            type: cc.Graphics,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let graphics = this.graphics = new cc.Graphics();
        graphics.circle(0, 0, 200);
        //添加颜色及透明度
        let fillColor = cc.Color.RED;//声明一个颜色变量
        fillColor.a = 200;//添加透明度
        graphics.fillColor = fillColor;//填充

        graphics.stroke();
        graphics.fill();
    },

    start() {


    },

    // update (dt) {},
});
