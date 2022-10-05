import React from 'react';
import Square from './Square';

function Board(props) {
    renderSquare(i) {
        return (<Square 
            value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
            />
            );
    }


export default Board;