import Move from "../base/Move";
import Board from "../Board";
import Cell from "../models/cell";
import Piece from "../models/piece";

export default class HorizontalMove extends Move{
    isAllowed(board: Board, currentPiece: Piece, src: Cell, dest: Cell): boolean {
        
        return src.cordinate.y===dest.cordinate.y &&
                src.cordinate.x !== dest.cordinate.x;
    }
    
}