import React from 'react';
import Square from './Square';

function Board(props) {
    const renderSquare = (i) => {
    return (
        <Square
        value={props.square[i]}
        onClick={() => props.onClick(i)}
        />
    );
    }
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    
    }



export default Board;