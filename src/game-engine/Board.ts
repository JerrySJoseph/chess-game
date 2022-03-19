import MoveNotAllowedError from "./exceptions/MoveNotAllowedError";
import Cell, { CellCordinate, createCell } from "./models/cell";
import Piece from "./models/piece";
import { defaultPieces } from "./moves/defaultMoves";



export default class Board {

    //SIZE of BOARD (8x8)
    private BOARD_SIZE = 8;

    private cells: Cell[];

    constructor() {
        this.cells = this.generateNewBoard();
    }

    private generateNewBoard(): Cell[] {
        const generatedCells: Cell[] = [];

        //Create an empty board
        let idx = 0;
        for (let x = 0; x < this.BOARD_SIZE; x++) {
            for (let y = 0; y < this.BOARD_SIZE; y++) {
                const CellCordinate: CellCordinate = {
                    x: x,
                    y: y
                }
                generatedCells.push(createCell(CellCordinate, idx++));
            }
        }

        //fill pieces at default location
        defaultPieces.forEach(piece => this.placePieceAt(generatedCells, piece))

        return generatedCells;
    }

    private getIndexForCordinate(cordinate: CellCordinate): number {
        console.log(cordinate)
        return (cordinate.x * this.BOARD_SIZE) + cordinate.y;
    }

    private placePieceAt(generatedCells: Cell[], piece: Piece) {
        const index = this.getIndexForCordinate(piece.currentPos);
        if (index > 63 || index < 0)
            throw new Error('Index out of board index: ' + index);
        generatedCells[this.getIndexForCordinate(piece.currentPos)].piece = piece;
    }

    public getCells(): Cell[] {
        return this.cells;
    }

    public getCellAt(index: number): Cell {
        return this.cells[index];
    }

    public isInBounds(x: number, y: number): boolean {
        return x >= 0 && x < this.BOARD_SIZE &&
            y >= 0 && y < this.BOARD_SIZE;
    }

    public movePiece(src: Cell, dest: Cell): Board {
        const { piece } = src;
        if (!piece)
            throw new Error("No piece was found at src cell");

        const allowedMoves = piece.moves;
        try {
            //check if move is allowed 
            allowedMoves.forEach(move => {
                if (!move.isAllowed(this, piece, src, dest))
                    throw new MoveNotAllowedError('Move not Allowed')
            })

            //perform actual move
            this.cells[dest.index].piece = piece;
            this.cells[src.index].piece = undefined;
            return this;

        } catch (error) {
            throw new MoveNotAllowedError('Move not Allowed')
        }

    }


}