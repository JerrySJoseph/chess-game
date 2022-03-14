import Board from "../Board";
import { CellCordinate } from "../models/cell";
import Piece from "../models/piece";

abstract class Move{
    abstract isAllowed(Board:Board, currentPiece:Piece, src:CellCordinate, dest:CellCordinate):boolean;
}

export default Move;