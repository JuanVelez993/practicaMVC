import Board from './model/Board.js';
import BoardView from './model/BoardView.js';
import Bar from './model/Bar.js';
import Ball from './model/Ball.js';




const canvas = document.getElementById('canvas');
const board = new Board(800, 400);
const barLeft = new Bar(20, 100, 40, 100, board);
const barRight = new Bar(735, 100, 40, 100, board);
const ball = new Ball(350, 100, 10, board);
const boardView = new BoardView(canvas, board);
document.addEventListener("keydown", function(event) {
    if (event.key == "w") {
        event.preventDefault();
        barLeft.up();
    } else if (event.key == "s") {
        event.preventDefault();
        barLeft.down();
    }
    if (event.key == "ArrowUp") {
        event.preventDefault();
        barRight.up();
    } else if (event.key == "ArrowDown") {
        event.preventDefault();
        barRight.down();
    } else if (event.key == " ") {
        event.preventDefault();
        board.playing = !board.playing;
    }

});



function main() {
    boardView.playGame();
    window.requestAnimationFrame(main);
};
main();