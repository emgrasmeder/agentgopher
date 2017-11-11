import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

const cellsReducer = (cells = [], action) => {
  switch (action.type) {
    case actionTypes.BECOME_VISIBLE:
      return cells.map(cell => {
        if (cell.id === action.value.id) {
          cell = Object.assign({}, { ...cell, hidden: action.value.hidden })
        }
        return cell
      });
    case actionTypes.BECOME_INVISIBLE:
      return cells.map(cell => {
        if (cell.id === action.value.id) {
          cell = Object.assign({}, {...cell, hidden: action.value.hidden })
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
