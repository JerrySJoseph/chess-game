import Move from "../base/Move";
import Board from "../Board";
import { CellCordinate } from "../models/cell";
import Piece from "../models/piece";

export default class VerticalMove extends Move{
    isAllowed(Board: Board, currentPiece: Piece, src: CellCordinate, dest: CellCordinate): boolean {
        throw new Error("Method not implemented.");
    }
    
}