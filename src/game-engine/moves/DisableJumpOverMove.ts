import Move from "../base/Move";
import Board from "../Board";
import Cell from "../models/cell";
import Piece from "../models/piece";

export default class DisableJumpOverMove extends Move{
    isAllowed(Board: Board, currentPiece: Piece, src: Cell, dest: Cell): boolean {
        return false;
    }
    
}