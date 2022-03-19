import Board from "../Board";
import Cell from "../models/cell";
import Piece from "../models/piece";

abstract class Move{
    abstract isAllowed(Board:Board, currentPiece:Piece, src:Cell, dest:Cell):boolean;
}

export default Move;