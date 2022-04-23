class Ball {
    constructor(x, y, radius, board) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.board = board;
        board.ball = this;
        this.kind = "circle";
        this.speedX = 3;
        this.speedY = 0;
        this.direction = 1;

    }
    moveBall() {
        this.x += (this.speedX * this.direction);
        this.y += (this.speedY);
    }
}
export default Ball;