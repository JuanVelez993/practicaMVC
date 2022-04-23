class boardView {
    constructor(canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.context = canvas.getContext("2d");

    }

    draw(context, element) {
        switch (element.kind) {
            case "rectangle":
                context.fillStyle = "red";
                context.fillRect(element.x, element.y, element.width, element.height);
                break;
            case "circle":
                context.fillStyle = "green";
                context.beginPath();
                context.arc(element.x, element.y, element.radius, 0, 7);
                context.fill();
                context.closePath();
                break;
            default:
                break;
        }
    }

    drawBars() {
        const bars = this.board.getElements();
        for (const bar of bars) {
            this.draw(this.context, bar);
        }
    }
    clean() {
        this.context.clearRect(0, 0, this.board.width, this.board.height);
    }

    playGame() {
        if (this.board.playing) {
            this.clean();
            this.drawBars();
            this.checkCollisions();
            this.ballReset();
            this.wallControl();
            this.board.ball.moveBall();
        }

    }

    checkCollisions() {
        const bars = this.board.bars;
        for (let i = bars.length - 1; i >= 0; i--) {
            const bar = bars[i];
            if (this.hit(bar, this.board.ball)) {
                this.board.ball.collision(bar);
            }
        }
    }

    hit(bar, ball) {
        let hit = false;
        if (ball.x + ball.width >= bar.x && ball.x < bar.x + bar.width) {
            if (ball.y + ball.height >= bar.y && ball.y < bar.y + bar.height) {
                hit = true;
            }
        }
        if (ball.x <= bar.x && ball.x + ball.width >= bar.x + bar.width) {
            if (ball.y <= bar.y && ball.y + ball.height >= bar.y + bar.height) {
                hit = true;
            }
        }
        if (bar.x <= ball.x && bar.x + bar.width >= ball.x + ball.width) {
            if (bar.y <= ball.y && bar.y + bar.height >= ball.y + ball.height) {
                hit = true;
            }
        }
        return hit;
    };


    ballReset() {
        const ball = this.board.ball;
        if (ball.x - ball.radius < 0) {
            this.resetBall();
        } else if (ball.x + ball.radius > this.board.width) {
            this.resetBall();
        }
    }

    wallControl() {
        const ball = this.board.ball;
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > this.board.height) {
            ball.speedY = -ball.speedY;
        }
    }

    resetBall() {
        const ball = this.board.ball;
        ball.x = this.board.width / 2;
        ball.y = this.board.height / 2;
        ball.speedX = -ball.speedX;
        ball.speed = 3;
    }
}

export default boardView;