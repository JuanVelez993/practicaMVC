class boardView {
    constructor(canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.context = canvas.getContext("2d");

    }

    draw(context, element) {
        if (element !== null && element.hasOwnProperty("kind")) {

            switch (element.kind) {
                case "rectangle":
                    context.fillRect(element.x, element.y, element.width, element.height);
                    break;
                case "circle":
                    context.beginPath();
                    context.arc(element.x, element.y, element.radius, 0, 7);
                    context.fill();
                    context.closePath();
                    break;
                default:
                    break;
            }
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
            this.board.ball.moveBall();
        }

    }

    checkCollisions() {
        const bars = this.board.bars;
        for (const bar of bars) {
            if (this.hit(bar, this.board.ball)) {
                this.board.ball.collision(bar);
            }
        }
    }

    hit(object1, object2) {
        var hit = false;
        if (object2.x + object2.width >= object1.x && object2.x < object1.x + object1.width) {

            if (object2.y + object2.height >= object1.y && object2.y < object1.y + object1.height) {
                hit = true;
            }
        }


        if (object2.x <= object1.x && object2.x + object2.width >= object1.x + object1.width) {

            if (object2.y <= object1.y && object2.y + object2.height >= object1.y + object1.height) {
                hit = true;
            }
        }


        if (object1.x <= object2.x && object1.x + object1.width >= object2.x + object2.width) {

            if (object1.y <= object2.y && object1.y + object1.height >= object2.y + object2.height) {
                hit = true;
            }
        }
        return hit;


    }
}

export default boardView;