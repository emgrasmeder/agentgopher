import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

const cellsReducer = (cells = [], action) => {
  switch (action.type) {
    case actionTypes.SET_CELL_COLOR:
      return cells.map(cell => {
        if (cell.id === action.value.id) {
          cell = Object.assign({}, { ...cell, color: action.value.color })
        }
        return cell
      });
    default:
      return cells;
  }
};

export default combineReducers({
  cells: cellsReducer,
});
