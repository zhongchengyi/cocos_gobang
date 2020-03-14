/**
 * @class
 * @exports
 */
class Utils {
    /**
     * 获取事件位置的游戏位置
     * @param getLocationX
     * @param getLocationY
     * @param node
     * @return {{x: number, y: number}}
     */
    static getGameLocation({event, node} = {}) {
        //触摸点的世界坐标
        var pos = new cc.Vec2(event.getLocationX(), event.getLocationY());
        //转换为UI坐标
        return node.convertToNodeSpaceAR(pos);
    }
}

module.exports = Utils;
