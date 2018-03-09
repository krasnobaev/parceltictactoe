import { connect } from 'react-redux';
import { calculateWinner, chooseCell, moveTo } from '../actions/';
import Game from '../components/Game.js';

const mapStateToProps = (state, own) => {
  const {
    winner,
    history,
    xIsNext,
    stepNumber
  } = state.boardState;

  return {
    state: (state || {}).boardState,
    history,
    stepNumber,
    winner,
    xIsNext,
  }
}

const mapDispatchToProps = (dispatch, own) => {
  return {
    dispatch,
    onBoardClick: iCell => {
      dispatch(chooseCell(iCell))
    },
    moveTo: iStep => {
      dispatch(moveTo(iStep))
    },

    stepNumber: 0,
    winner: '',
    xIsNext: false,
    history: [{
      boardPositions: Array(9).fill('')
    }],
  }
}

const VisibleGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default VisibleGame
