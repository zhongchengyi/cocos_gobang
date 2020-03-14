// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

/**
 *玩家
 */
cc.Class({
    extends: cc.Component,

    properties: {
        playerName: {
            default: "玩家名",
            tooltip: '玩家名字',
            notice() {
                if (this._nameLabel) {
                    this._nameLabel.text = this.playerName;
                }
            }
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._nameLabel = this.node.getComponent(cc.Label);
        if (this._nameLabel) {
            this._nameLabel.text = this.playerName;
        }
        this.node.on(cc.Node.EventType.MOUSE_DOWN, e => {
            this.node.off(cc.Node.EventType.MOUSE_DOWN);
            this.node.emit('user-decision', {player: this})
        });
    },

    start() {
    },

    // update (dt) {},
});
