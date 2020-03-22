class FlickerAction {


    /**
     *
     * @param {cc.Node} node
     */
    static runFlicker(node) {
        node.flickerAction = cc.blink(1, 1).repeatForever();
        node.runAction(node.flickerAction);
    }

    /**
     *
     * @param {cc.Node} node
     */
    static stopFlicker(node) {
        if (node.getNumberOfRunningActions() > 0) {
            node.stopAction(node.flickerAction);
        }
    }
}

export default FlickerAction;