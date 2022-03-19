import PropTypes from 'prop-types';
import React from 'react';
import { useGame } from '../../context/gamecontext';
import './board.css';


export default function Board() {
  
    const {currentState,selectedCell,setSelectedCell}=useGame();

    return <div className="board">
        {
            currentState.getCells().map(cell=>{
                let isBlack=false;
                if(cell.cordinate.x%2===0){
                    if(cell.cordinate.y%2===0)
                        isBlack=false;
                    else isBlack=true;
                }
                else{
                    if(cell.cordinate.y%2===0)  
                       isBlack=true;
                    else
                        isBlack=false;
                }
                return <Cell isBlack={isBlack} isSelected={cell.index===selectedCell?.index} cell={cell} onClick={setSelectedCell}/>
           
            })
        }
    </div>
}

/** Single cell Components  */
function Cell(cellProps:any){
    const {isBlack,cell, isSelected,onClick}=cellProps;
    const baseClassName="cell ";
    const fullClassName=baseClassName+ (isBlack?"cell-black":"cell-white") + (isSelected?" cell-selected":"");
    
    function handleCellClick(){
        if(!cell.piece)
            onClick(null);
        else 
            onClick(cell);
    }

    return <div className={fullClassName} onClick={handleCellClick}>
        {
            cell.piece && <img src={cell.piece.icon} alt={cell.piece.name} onClick={handleCellClick}/>
        }
    </div>
}

Cell.propTypes={
    isBlack:PropTypes.bool,
    cell:PropTypes.object,
    isSelected:PropTypes.bool,
    onClick:PropTypes.func
}

Cell.defaultProps={
    isBlack:false,
    isSelected:false,
    cell:null,
    onClick:null
}