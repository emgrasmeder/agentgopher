import actionTypes from './actionTypes';

export const becomeVisible = cell => ({
  type: actionTypes.BECOME_VISIBLE,
  value: {...cell, hidden: false}
});

export const becomeInvisible = cell => ({
  type: actionTypes.BECOME_INVISIBLE,
  value: {...cell, hidden: true},
});