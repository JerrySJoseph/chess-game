import Piece from "./piece"

export type CellCordinate={
    x:number,
    y:number
}

export default interface Cell{
    index:number,
    cordinate:CellCordinate,
    piece?:Piece,
    isEmpty:Function
}

export function createCell(cordinate:CellCordinate, idx:number,piece?:Piece):Cell{
    return {
        cordinate,
        index:idx,
        piece,
        isEmpty:()=>piece===null || piece===undefined
    }
}