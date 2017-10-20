import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

const cellsReducer = (cells = [], action) => {
  switch (action.type) {
    case actionTypes.BECOME_VISIBLE:
      return [action.value];
    default:
      return cells;
  }
};

export default combineReducers({
    cells: cellsReducer,
});
