import actionTypes from './actionTypes';

export const becomeVisible = cellId => ({
  type: actionTypes.BECOME_VISIBLE,
  value: cellId,
});

export const becomeInvisible = cellId => ({
  type: actionTypes.BECOME_INVISIBLE,
  value: cellId,
});