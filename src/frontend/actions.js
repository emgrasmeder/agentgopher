import actionTypes from './actionTypes';

export const setCellColor = (cellId, color) => ({
  type: actionTypes.SET_CELL_COLOR,
  value: { id: cellId, color: color },
});