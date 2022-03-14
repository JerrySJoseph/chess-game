
import { createContext, FC, useContext, useState } from "react";
import { NOOP } from "../common/noop";
import Board from "../game-engine/Board";

export type Player = 'white'|'black'

export interface IGameState{
    nextPlayer:Player,
    currentState:Board,
    previousStates:Board[],
    updateBoardState:Function
}

const defaultGameState:IGameState={
    nextPlayer:'white',
    currentState:new Board(),
    previousStates:[],
    updateBoardState:NOOP
}

export const GameContext=createContext<IGameState>(defaultGameState);

export const useGame=()=>useContext(GameContext);

export const GameContextProvider:FC=({children})=>{

    const [currentBoardState,setCurrentBoardState]=useState<Board>(defaultGameState.currentState);
    const [previousBoardStates,setPreviousBoardStates]=useState<Board[]>(defaultGameState.previousStates);
    const [nextPlayer,setNextPlayer]=useState<Player>(defaultGameState.nextPlayer);

    const handleBoardUpdate=(newBoardState:Board)=>{
        setCurrentBoardState(newBoardState)
    }

    const handlePieceMove=()=>{

    }

    const value:IGameState={
        currentState:currentBoardState,
        previousStates:previousBoardStates,
        updateBoardState:handleBoardUpdate,
        nextPlayer:nextPlayer
    }

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>
}