
import { createContext, FC, useContext, useEffect, useState } from "react";
import { NOOP } from "../common/noop";
import Board from "../game-engine/Board";
import Cell from "../game-engine/models/cell";
import Piece from "../game-engine/models/piece";
import { defaultPieces } from "../game-engine/moves/defaultMoves";

export type Player = 'white'|'black'

export interface IGameState{
    nextPlayer:Player,
    currentState:Board,
    selectedCell?:Cell,
    previousStates:Board[],
    updateBoardState:Function,
    setSelectedCell:(newCell:Cell)=>void,
    [key:string]:any
}

const defaultGameState:IGameState={
    nextPlayer:'white',
    currentState:new Board(),
    selectedCell:undefined,
    previousStates:[],
    updateBoardState:NOOP,
    setSelectedCell:(newCell:Cell)=>{},
    
}

export const GameContext=createContext<IGameState>(defaultGameState);

export const useGame=()=>useContext(GameContext);

export const GameContextProvider:FC=({children})=>{

    const [availablePieces,setAvailablePieces]=useState<Piece[]>(defaultPieces)
    const [currentBoard,setCurrentBoard]=useState<Board>(defaultGameState.currentState);
    const [previousBoardStates,setPreviousBoardStates]=useState<Board[]>(defaultGameState.previousStates);
    const [nextPlayer,setNextPlayer]=useState<Player>(defaultGameState.nextPlayer);
    const [selectedCell,setSelectedCell]=useState<Cell|undefined>(undefined);
    const [possibleDestinations,setPossibleDestinations]=useState<Cell[]>([]);

    useEffect(()=>{
        if(selectedCell){
            executeMove(selectedCell,currentBoard.getCellAt(16))
        }
    },[selectedCell])

    const handleBoardUpdate=(newBoardState:Board)=>{
        setCurrentBoard(newBoardState)
    }

    function addToPreviousBoardStates(board:Board){
        setPreviousBoardStates(prev=>[...prev,board]);
    }

    function executeMove(src:Cell, dest:Cell){
        try {
            const newBoard=currentBoard.movePiece(src,dest);
            addToPreviousBoardStates(currentBoard);
            setCurrentBoard(newBoard);
        } catch (error) {
            alert(error);
        }   
    }

    function undoMove(){

    }

    function calculatePossibleMoves(){

    }

    const value:IGameState={
        ...defaultGameState,
        currentState:currentBoard,
        previousStates:previousBoardStates,
        updateBoardState:handleBoardUpdate,
        setSelectedCell,
        selectedCell,
        nextPlayer:nextPlayer,
        executeMove,
    }

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>
}