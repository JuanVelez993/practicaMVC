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
                    context.arc(element.x, element.y, element.radius, 0, Math.PI);
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


}
export default boardView;