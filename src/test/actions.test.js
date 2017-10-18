import * as actions from '../actions'
import actionTypes from "../actionTypes";

describe('visibility actions', () => {
  it('become visible should use BECOME_VISIBILE with a cell id', () => {
    const cellId = 1;
    expect(actions.becomeVisible(cellId)).toEqual({
      type: actionTypes.BECOME_VISIBLE,
      value: cellId,
    })
  })

  it('become invisible should use BECOME_INVISIBILE with a cell id', () => {
    const cellId = 1;
    expect(actions.becomeInvisible(cellId)).toEqual({
      type: actionTypes.BECOME_INVISIBLE,
      value: cellId,
    })
  })

})
