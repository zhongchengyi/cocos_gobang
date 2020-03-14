/**
 * @class
 * @exports
 */
class UserEvent {

    /**
     * 落棋成功的事件
     * @event UserEvent.dropChessSuccessEvent
     * @type {object}
     * @property {{x: number, y: number}} location
     */

    /**
     * 落棋成功的事件
     * @type {string}
     */
    static dropChessSuccess = 'drop-chess-success';
}

module.exports = UserEvent;
