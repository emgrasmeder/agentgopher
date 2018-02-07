import { combineReducers } from 'redux';
import { SET_CELL_COLOR } from './actionTypes';

const cellsReducer = (cells = [], action) => {

  switch (action.type) {
    case 'WEBSOCKET:MESSAGE':
      const data = JSON.parse(action.payload.data);
      switch (data.message) {
        case 'initialize':
          const cells = [];
          for (var i = 0; i < data.cellCount; i++) {
            cells.push({ id: i, color: data.color })
          }
          return cells;
        default:
          return cells;
      }
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

export default combineReducers({
  cells: cellsReducer,
});
