import Move from "../base/Move";
import Board from "../Board";
import { CellCordinate } from "../models/cell";
import piece from "../models/piece";

export default class LMove extends Move{
    isAllowed(Board: Board, currentPiece: piece, src: CellCordinate, dest: CellCordinate): boolean {
        throw new Error("Method not implemented.");
    }
    
}