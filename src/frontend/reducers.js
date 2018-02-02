import { combineReducers } from 'redux';
import {SET_CELL_COLOR} from './actionTypes';

const cellsReducer = (cells = [], action) => {
  switch (action.type) {
    case SET_CELL_COLOR:
      return cells.map(cell => {
        if (cell.id === action.value.id) {
          cell = Object.assign({}, { ...cell, color: action.value.color });
          return cell
        }
        return cell
      });
    default:
      return cells;
  }
};

const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WEBSOCKET:MESSAGE':
      const data = JSON.parse(action.payload.data);
      return { ...state, ...data}
    default:
      return state
  }
};

export default combineReducers({
  cells: cellsReducer,
  socket: socketReducer
});
