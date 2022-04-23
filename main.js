import Board from './model/Board.js';
import BoardView from './model/BoardView.js';


//window.addEventListener("load", main);

function main() {
    const canvas = document.getElementById('canvas');
    let board = new Board(800, 400);
    console.log(board);
    let boardView = new BoardView(canvas, board);

};
main();