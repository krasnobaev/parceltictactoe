import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const state = {
  boardState: {
    history: [{
      boardPositions: Array(9).fill('')
    }],
    stepNumber: 0,
    winner: null,
    xIsNext: true
  }
};

export const store = ((initialState = state) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger
    )
  );
})()
