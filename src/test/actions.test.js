import * as actions from '../actions'
import actionTypes from "../actionTypes";

describe('visibility actions', () => {
  it('become visible should use BECOME_VISIBILE with a cell', () => {
    const cellId = 1;
    const cell = { id: cellId, hidden: true };
    expect(actions.becomeVisible(cell)).toEqual({
      type: actionTypes.BECOME_VISIBLE,
      value: {
        id: cellId,
        hidden: false
      }
    })
  });

  it('become invisible should use BECOME_INVISIBILE with a cell', () => {
    const cellId = 1;
    const cell = { id: cellId, hidden: false };
    expect(actions.becomeInvisible(cell)).toEqual({
      type: actionTypes.BECOME_INVISIBLE,
      value: {
        id: cellId,
        hidden: true
      }
    })
  })
});

