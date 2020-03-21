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


    /**
     * 游戏结束
     * @event UserEvent.gameOverEvent
     * @type {object}
     * @property {ChessType} type
     * @property {[{x,y}]} chesses
     */
    /**
     * 游戏结束
     * @type {string}
     * @see {UserEvent.gameOverEvent}
     */
    static gameOver = 'gameOver';
}

export default UserEvent;
