import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

const cellVisibilityReducer = (cellVisibilityState = [], action) => {
  switch (action.type) {
    case actionTypes.BECOME_VISIBLE:
      console.log("become visibile dispatched", [...cellVisibilityState, action.value] )
      return [...cellVisibilityState, action.value];
    case actionTypes.BECOME_INVISIBLE:
      console.log("become invisibile dispatched", cellVisibilityState.filter(x => x !== action.value))
      return cellVisibilityState.filter(x => x !== action.value);
    default:
      return cellVisibilityState;
  }
};

const cellsReducer = (cellsState = {content: []}, action) => {
  switch (action.type) {
    case actionTypes.GET_CELLS:
      return {content: action.cells};
   default:
      return cellsState;
  }
};


export default combineReducers({
    cells: cellsReducer,
    cellVisibilityToggle: cellVisibilityReducer,
});
