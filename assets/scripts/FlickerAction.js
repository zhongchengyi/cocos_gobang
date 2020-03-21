class FlickerAction {
    static _thinkingAction = cc.sequence(
        cc.tintTo(2, 255, 0, 0),
        // cc.delayTime(0.1),
        // cc.fadeOut(0.1),
        // cc.delayTime(0.1),
        // cc.fadeIn(0.1),
        // cc.delayTime(0.1),
        cc.tintTo(2, 255, 255, 255),
        // cc.delayTime(0.1)
    ).repeatForever();

    /**
     *
     * @param {cc.Node} node
     */
    static runFlicker(node) {
        node.runAction(FlickerAction._thinkingAction);
    }

    /**
     *
     * @param {cc.Node} node
     */
    static stopFlicker(node) {
        if (node.getNumberOfRunningActions() > 0) {
            node.stopAllActions();
        }
    }
}

export default FlickerAction;