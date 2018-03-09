export const CHOOSE_CELL = 'CHOOSE_CELL'
export const MOVE_TO = 'MOVE_TO'

export const chooseCell = iCell => {
  return { type: 'CHOOSE_CELL', iCell };
}

export const moveTo = iStep => {
  return { type: 'MOVE_TO', iStep };
}

