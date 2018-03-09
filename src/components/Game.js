import React from 'react';
import { connect } from 'react-redux';

import { store } from '../store.js';
import { chooseCell } from '../actions/';

import Board from './Board';
import './Game.sass';

class Game extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.state.winner !== this.props.winner) {
      this.setState({ winner: nextProps.state.winner });
    }
  }

  render() {
    const moves = this.props.state.history.map((step, move) => {
      return (
        <li key={move}>
          <button onClick={this.props.moveTo.bind(this, move)}>
            {move ? `Go to move #${move}` : 'Go to game start'}
          </button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            boardPositions={this.props.state.history[this.props.state.stepNumber].boardPositions}
            onClick={this.props.onBoardClick}
          />
        </div>
        <div className="game-info">
          <div>{(this.props.state.winner) ?
            `Winner: ${this.props.state.winner}` :
            `Next player: ${this.props.state.xIsNext ? 'X' : 'O'}`
          }</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game
