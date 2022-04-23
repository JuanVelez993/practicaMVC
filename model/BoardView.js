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
            console.log(element)
            switch (element.kind) {
                case "rectangle":
                    context.fillRect(element.x, element.y, element.width, element.height);
                    break;
                default:
                    break;
            }
        }

    }

    drawBars() {
        const bars = this.board.bars;
        for (const bar of bars) {
            this.draw(this.context, bar);
        }
    }
}
export default boardView;