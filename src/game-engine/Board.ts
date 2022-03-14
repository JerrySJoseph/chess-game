import MoveNotAllowedError from "./exceptions/MoveNotAllowedError";
import Cell, { CellCordinate, createCell } from "./models/cell";
import Piece, { createPiece } from "./models/piece";


const ROOK_ICON_WHITE='/assets/pieces/rook_w.png';
const ROOK_ICON_BLACK='/assets/pieces/rook_b.png';;
const KNIGHT_ICON_WHITE='/assets/pieces/knight_w.png';
const KNIGHT_ICON_BLACK='/assets/pieces/knight_b.png';

const BISHOP_ICON_WHITE='/assets/pieces/bishop_w.png';
const KING_ICON_WHITE='/assets/pieces/king_w.png';
const QUEEN_ICON_WHITE='/assets/pieces/queen_w.png';
const PAWN_ICON_WHITE='/assets/pieces/pawn_w.png';
const BISHOP_ICON_BLACK='/assets/pieces/bishop_b.png';
const KING_ICON_BLACK='/assets/pieces/king_b.png';
const QUEEN_ICON_BLACK='/assets/pieces/queen_b.png';
const PAWN_ICON_BLACK='/assets/pieces/pawn_b.png';


const initialPiecePlacement:Piece[]=[
    
    //White
    createPiece(ROOK_ICON_WHITE,'ROOK','ROOK',{x:0,y:0},[],'BLACK'),   
    createPiece(KNIGHT_ICON_WHITE,'KNIGHT','KNIGHT',{x:0,y:1},[],'BLACK'), 
    createPiece(BISHOP_ICON_WHITE,'BISHOP','BISHOP',{x:0,y:2},[],'BLACK'),  
    createPiece(QUEEN_ICON_WHITE,'QUEEN','QUEEN',{x:0,y:3},[],'BLACK'),
    createPiece(KING_ICON_WHITE,'KING','KING',{x:0,y:4},[],'BLACK'),    
    createPiece(BISHOP_ICON_WHITE,'BISHOP','BISHOP',{x:0,y:5},[],'BLACK'),
    createPiece(KNIGHT_ICON_WHITE,'KNIGHT','KNIGHT',{x:0,y:6},[],'BLACK'),
    createPiece(ROOK_ICON_WHITE,'ROOK','ROOK',{x:0,y:7},[],'BLACK'),

    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:0},[],'BLACK'),
    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:1},[],'BLACK'),
    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:2},[],'BLACK'),
    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:3},[],'BLACK'),
    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:4},[],'BLACK'),
    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:5},[],'BLACK'),
    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:6},[],'BLACK'),
    createPiece(PAWN_ICON_WHITE,'PAWN','PAWN',{x:1,y:7},[],'BLACK'),


    //Black
    createPiece(ROOK_ICON_BLACK,'ROOK','ROOK',{x:7,y:0},[],'WHITE'),   
    createPiece(KNIGHT_ICON_BLACK,'KNIGHT','KNIGHT',{x:7,y:1},[],'WHITE'),
    createPiece(BISHOP_ICON_BLACK,'BISHOP','BISHOP',{x:7,y:2},[],'WHITE'),
    createPiece(QUEEN_ICON_BLACK,'QUEEN','QUEEN',{x:7,y:3},[],'WHITE'),
    createPiece(KING_ICON_BLACK,'KING','KING',{x:7,y:4},[],'WHITE'),   
    createPiece(BISHOP_ICON_BLACK,'BISHOP','BISHOP',{x:7,y:5},[],'WHITE'),
    createPiece(KNIGHT_ICON_BLACK,'KNIGHT','KNIGHT',{x:7,y:6},[],'WHITE'),
    createPiece(ROOK_ICON_BLACK,'ROOK','ROOK',{x:7,y:7},[],'WHITE'),

    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:0},[],'WHITE'),
    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:1},[],'WHITE'),
    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:2},[],'WHITE'),
    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:3},[],'WHITE'),
    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:4},[],'WHITE'),
    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:5},[],'WHITE'),
    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:6},[],'WHITE'),
    createPiece(PAWN_ICON_BLACK,'PAWN','PAWN',{x:6,y:7},[],'WHITE'),
]


export default class Board{

    //SIZE of BOARD (8x8)
    private BOARD_SIZE=8;

    private cells: Cell[];
    
    constructor(){
        this.cells=this.generateNewBoard();
    }

    private generateNewBoard():Cell[]{
        const generatedCells:Cell[]=[];
        
        //Create an empty board
        let idx=0;
        for(let x=0;x<this.BOARD_SIZE;x++){
            for(let y=0;y<this.BOARD_SIZE;y++){
                const CellCordinate:CellCordinate={
                    x:x,
                    y:y
                }
                generatedCells.push(createCell(CellCordinate,idx++));
            }
        }

        //fill pieces at default location
        initialPiecePlacement.forEach(piece=>this.placePieceAt(generatedCells,piece))

        return generatedCells;
    }

    private getIndexForCordinate(cordinate:CellCordinate):number{
        console.log(cordinate)
        return (cordinate.x*this.BOARD_SIZE) + cordinate.y;
    }

    private placePieceAt(generatedCells:Cell[],piece:Piece){
        const index=this.getIndexForCordinate(piece.currentPos);
        if(index>63 || index<0)
            throw new Error('Index out of board index: '+index);
        generatedCells[this.getIndexForCordinate(piece.currentPos)].piece=piece;
    }

    public getCells():Cell[]{
        return this.cells;
    }

    public movePiece(piece:Piece, src:CellCordinate, dest:CellCordinate):boolean{
        const allowedMoves=piece.moves;
        try {
            //check if move is allowed 
            allowedMoves.forEach(move=>{
                if(!move.isAllowed(this,piece,src,dest))
                    return false;
            })

            /*//move the piece to destination cell
            this.cells[dest.x][dest.y].piece=piece;
            this.cells[src.x][src.y].piece=undefined;*/      

            return true;

        } catch (error) {
            throw new MoveNotAllowedError('Move not Allowed')
        }
        
    }

    
}