import Move from "../base/Move";
import { CellCordinate } from "./cell";

export type PieceType='KING'|'QUEEN'|'BISHOP'|'KNIGHT'| 'ROOK'| 'PAWN';
export type Player ='WHITE'|'BLACK'

export default interface Piece{
    player:Player,
    icon:string,
    type:PieceType,
    name:string,
    currentPos:CellCordinate,
    moves:Move[],
    movable:boolean,
}

export function createPiece(icon:string,type:PieceType,name:string,currentPos:CellCordinate,moves:Move[],player?:Player,movable:boolean=true):Piece{
    return{
        player:player||'WHITE',
        icon,
        type,
        name,
        currentPos,
        moves,
        movable
    }

}