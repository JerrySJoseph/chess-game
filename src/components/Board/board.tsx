import PropTypes from 'prop-types';
import React,{useState} from 'react';
import { NOOP } from '../../common/noop';
import { useGame } from '../../context/gamecontext';
import CellModel from '../../game-engine/models/cell';
import './board.css';


export default function Board() {
  
    const {currentState}=useGame();
    const [selectedCell,setSelectedCell]=useState<CellModel|null>(null);

    function handleOnCellClick(newCell:CellModel){
        setSelectedCell(newCell);
    }

    
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
                return <Cell isBlack={isBlack} isSelected={cell.index===selectedCell?.index} cell={cell} onClick={handleOnCellClick}/>
           
            })
        }
    </div>
}

function Cell(cellProps:any){
    const {isBlack,cell, isSelected,onClick}=cellProps;
    const baseClassName="cell ";
    const fullClassName=baseClassName+ (isBlack?"cell-black":"cell-white") + (isSelected?" cell-selected":"");
    

    return <div className={fullClassName}>
        {
            cell.piece && <img src={cell.piece.icon} alt={cell.piece.name} onClick={()=>onClick(cell)}/>
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