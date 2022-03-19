import Move from "../base/Move";
import Board from "../Board";
import Cell from "../models/cell";
import Piece from "../models/piece";

export default class IsInBoundsMove extends Move{
    isAllowed(board: Board, currentPiece: Piece, src: Cell, dest: Cell): boolean {
        //check if cordinates is in bounds
        if(!board.isInBounds(dest.cordinate.x,dest.cordinate.y))
            throw new Error("Destination cell is out of bounds");
        return true;
    }
    
}