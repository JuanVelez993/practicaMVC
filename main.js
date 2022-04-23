import Board from './model/Board.js';
import BoardView from './model/BoardView.js';
import Bar from './model/Bar.js';
import Ball from './model/Ball.js';


//window.addEventListener("load", main);

const canvas = document.getElementById('canvas');
const board = new Board(800, 400);
const barLeft = new Bar(20, 100, 40, 100, board);
const barRight = new Bar(735, 100, 40, 100, board);
const ball = new Ball(350, 100, 10, board);
const boardView = new BoardView(canvas, board);
document.addEventListener("keydown", function(event) {

    if (event.key === "w") {
        barLeft.up();
    } else if (event.key === "s") {
        barLeft.down();
    } else if (event.key === "ArrowUp") {
        barRight.up();
    } else if (event.key === "ArrowDown") {
        barRight.down();
    }

})



function main() {
    boardView.clean();
    boardView.drawBars();
    window.requestAnimationFrame(main);


};
main();