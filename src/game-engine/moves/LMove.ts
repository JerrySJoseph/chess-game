import Move from "../base/Move";
import Board from "../Board";
import Cell from "../models/cell";
import piece from "../models/piece";

export default class LMove extends Move{
    isAllowed(Board: Board, currentPiece: piece, src: Cell, dest: Cell): boolean {
        throw new Error("Method not implemented.");
    }
    
}