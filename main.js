import Board from './model/Board.js';
import BoardView from './model/BoardView.js';
import Bar from './model/Bar.js';


//window.addEventListener("load", main);

function main() {
    const canvas = document.getElementById('canvas');
    let board = new Board(800, 400);
    const barLeft = new Bar(20, 100, 40, 100, board);
    const barRight = new Bar(735, 100, 40, 100, board);
    console.log(board);
    let boardView = new BoardView(canvas, board);
    boardView.drawBars();

};
main();