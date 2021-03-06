import Move from "../base/Move";
import Board from "../Board";
import Cell from "../models/cell";
import Piece from "../models/piece";

export default class VerticalMove extends Move{
    isAllowed(Board: Board, currentPiece: Piece, src: Cell, dest: Cell): boolean {
        return src.cordinate.x===dest.cordinate.x &&
                src.cordinate.y !== dest.cordinate.y;
    }
    
}