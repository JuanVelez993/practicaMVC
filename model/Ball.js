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
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI / 12;
        this.speed = 3;
        this.width = radius * 2;
        this.height = radius * 2;

    }
    moveBall() {
        this.x += (this.speedX * this.direction);
        this.y += (this.speedY);
    }


    collision(bar) {
        var relative_intersect_y = bar.y + bar.height / 2 - this.y;
        var normalized_intersect_y = relative_intersect_y / (bar.height / 2);
        this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;
        this.speedY = this.speed * -Math.sin(this.bounce_angle);
        this.speedX = this.speed * Math.cos(this.bounce_angle);
        if (this.x > (this.board.width / 2)) {
            this.direction = -1;
        } else {
            this.direction = 1;
        }
    }
}
export default Ball;