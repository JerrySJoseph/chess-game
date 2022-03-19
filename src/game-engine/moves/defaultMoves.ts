import Piece, { createPiece } from "../models/piece";

const ROOK_ICON_WHITE = '/assets/pieces/rook_w.png';
const ROOK_ICON_BLACK = '/assets/pieces/rook_b.png';;
const KNIGHT_ICON_WHITE = '/assets/pieces/knight_w.png';
const KNIGHT_ICON_BLACK = '/assets/pieces/knight_b.png';

const BISHOP_ICON_WHITE = '/assets/pieces/bishop_w.png';
const KING_ICON_WHITE = '/assets/pieces/king_w.png';
const QUEEN_ICON_WHITE = '/assets/pieces/queen_w.png';
const PAWN_ICON_WHITE = '/assets/pieces/pawn_w.png';
const BISHOP_ICON_BLACK = '/assets/pieces/bishop_b.png';
const KING_ICON_BLACK = '/assets/pieces/king_b.png';
const QUEEN_ICON_BLACK = '/assets/pieces/queen_b.png';
const PAWN_ICON_BLACK = '/assets/pieces/pawn_b.png';

export const defaultPieces: Piece[] = [

    //White
    createPiece(ROOK_ICON_WHITE, 'ROOK', 'ROOK_WHITE_1', { x: 0, y: 0 }, [], 'WHITE', false),
    createPiece(KNIGHT_ICON_WHITE, 'KNIGHT', 'KNIGHT_WHITE_1', { x: 0, y: 1 }, [], 'WHITE'),
    createPiece(BISHOP_ICON_WHITE, 'BISHOP', 'BISHOP_WHITE_1', { x: 0, y: 2 }, [], 'WHITE', false),
    createPiece(QUEEN_ICON_WHITE, 'QUEEN', 'QUEEN_WHITE', { x: 0, y: 3 }, [], 'WHITE', false),
    createPiece(KING_ICON_WHITE, 'KING', 'KING_WHITE', { x: 0, y: 4 }, [], 'WHITE', false),
    createPiece(BISHOP_ICON_WHITE, 'BISHOP', 'BISHOP_WHITE_2', { x: 0, y: 5 }, [], 'WHITE', false),
    createPiece(KNIGHT_ICON_WHITE, 'KNIGHT', 'KNIGHT_WHITE_2', { x: 0, y: 6 }, [], 'WHITE'),
    createPiece(ROOK_ICON_WHITE, 'ROOK', 'ROOK_WHITE_2', { x: 0, y: 7 }, [], 'WHITE', false),

    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_1', { x: 1, y: 0 }, [], 'WHITE'),
    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_2', { x: 1, y: 1 }, [], 'WHITE'),
    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_3', { x: 1, y: 2 }, [], 'WHITE'),
    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_4', { x: 1, y: 3 }, [], 'WHITE'),
    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_5', { x: 1, y: 4 }, [], 'WHITE'),
    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_6', { x: 1, y: 5 }, [], 'WHITE'),
    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_7', { x: 1, y: 6 }, [], 'WHITE'),
    createPiece(PAWN_ICON_WHITE, 'PAWN', 'PAWN_WHITE_8', { x: 1, y: 7 }, [], 'WHITE'),


    //Black
    createPiece(ROOK_ICON_BLACK, 'ROOK', 'ROOK_BLACK_1', { x: 7, y: 0 }, [], 'BLACK', false),
    createPiece(KNIGHT_ICON_BLACK, 'KNIGHT', 'KNIGHT_BLACK_1', { x: 7, y: 1 }, [], 'BLACK'),
    createPiece(BISHOP_ICON_BLACK, 'BISHOP', 'BISHOP_BLACK_1', { x: 7, y: 2 }, [], 'BLACK', false),
    createPiece(QUEEN_ICON_BLACK, 'QUEEN', 'QUEEN_BLACK', { x: 7, y: 3 }, [], 'BLACK', false),
    createPiece(KING_ICON_BLACK, 'KING', 'KING_BLACK', { x: 7, y: 4 }, [], 'BLACK', false),
    createPiece(BISHOP_ICON_BLACK, 'BISHOP', 'BISHOP_BLACK_2', { x: 7, y: 5 }, [], 'BLACK', false),
    createPiece(KNIGHT_ICON_BLACK, 'KNIGHT', 'KNIGHT_BLACK_2', { x: 7, y: 6 }, [], 'BLACK'),
    createPiece(ROOK_ICON_BLACK, 'ROOK', 'ROOK_BLACK_2', { x: 7, y: 7 }, [], 'BLACK', false),

    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_1', { x: 6, y: 0 }, [], 'BLACK'),
    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_2', { x: 6, y: 1 }, [], 'BLACK'),
    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_3', { x: 6, y: 2 }, [], 'BLACK'),
    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_4', { x: 6, y: 3 }, [], 'BLACK'),
    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_5', { x: 6, y: 4 }, [], 'BLACK'),
    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_6', { x: 6, y: 5 }, [], 'BLACK'),
    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_7', { x: 6, y: 6 }, [], 'BLACK'),
    createPiece(PAWN_ICON_BLACK, 'PAWN', 'PAWN_BLACK_8', { x: 6, y: 7 }, [], 'BLACK'),
]
