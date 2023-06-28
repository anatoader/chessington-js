import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = new Array<Square>();
        const position: Square = board.findPiece(this);
        const direction: number = (this.player == Player.WHITE) ? 1 : -1;
        const firstRow: number = (this.player == Player.WHITE) ? 2 : 6;

        if (position.row == firstRow) {
            let twoStepsPosition: Square = Square.at(position.row + direction * 2, position.col);

            if (board.getPiece(twoStepsPosition) == undefined) {
                moves.push(twoStepsPosition);
            }
        }

        let nextSquare: Square = Square.at(position.row + direction, position.col);
        if (board.getPiece(nextSquare) == undefined) {
            moves.push(nextSquare);
        }

        return moves;
    }
}
