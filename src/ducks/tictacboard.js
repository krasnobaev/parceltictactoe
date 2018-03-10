import { combineReducers } from 'redux'

/* actions */

export const CHOOSE_CELL = 'CHOOSE_CELL'
export const MOVE_TO = 'MOVE_TO'
export const MOVE_NEXT = 'MOVE_NEXT'
export const MOVE_BACK = 'MOVE_BACK'

/* action creators */

export const chooseCell = iCell => {
  return { type: 'CHOOSE_CELL', iCell };
}

export const moveTo = iStep => {
  return { type: 'MOVE_TO', iStep };
}

export const moveNext = iStep => {
  return { type: 'MOVE_NEXT', iStep };
}

export const moveBack = iStep => {
  return { type: 'MOVE_BACK', iStep };
}

/* reducers */

function calculateWinner(aBoardPoss = []) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (aBoardPoss[a] && aBoardPoss[a] === aBoardPoss[b] && aBoardPoss[a] === aBoardPoss[c]) {
      return aBoardPoss[a];
    }
  }
  return '';
}

const initialState = {
  history: [{
    boardPositions: Array(9).fill('')
  }],
  stepNumber: 0,
  winner: '',
  xIsNext: true
}

const boardState = (state = initialState, { type, iCell, iStep, aSquares } = action) => {
  let _aBoardPoss;

  switch (type) {
    case CHOOSE_CELL:
      _aBoardPoss = state.history.slice(state.stepNumber, state.stepNumber+1)[0].boardPositions.slice();
      if (
        calculateWinner(_aBoardPoss) ||
        (!state.warping && _aBoardPoss[iCell])
      ) {
        return state;
      }
      _aBoardPoss[iCell] = ((state.stepNumber%2) === 0) ? 'X' : 'O';

      return {
        history: state.history.slice(0, state.stepNumber+1).concat([{
          boardPositions: _aBoardPoss
        }]),
        stepNumber: state.stepNumber+1,
        xIsNext: (state.stepNumber%2) === 0,
        winner: calculateWinner(_aBoardPoss),
        warping: false
      };
    case MOVE_TO:
      _aBoardPoss = state.history.slice(iStep, iStep+1)[0].boardPositions.slice();

      return Object.assign({}, state, {
        stepNumber: iStep,
        xIsNext: (iStep % 2) === 0,
        winner: calculateWinner(_aBoardPoss),
        warping: true,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  boardState
})

export default rootReducer

