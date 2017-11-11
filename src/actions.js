import actionTypes from './actionTypes';

export const becomeVisible = cellId => ({
  type: actionTypes.BECOME_VISIBLE,
  value: { id: cellId, hidden: false }
});

export const becomeInvisible = cellId => ({
  type: actionTypes.BECOME_INVISIBLE,
  value: { id: cellId, hidden: true },
});