import * as actions from '../actions'

describe('visibility actions', () => {
  it('become visible should use BECOME_VISIBILE with a cell id', () => {
    const cellId = 1;
    expect(actions.becomeVisible(cellId)).toEqual({
      type: 'BECOME_VISIBLE',
      id: cellId,
    })
  })

  it('become invisible should use BECOME_INVISIBILE with a cell id', () => {
    const cellId = 1;
    expect(actions.becomeInvisible(cellId)).toEqual({
      type: 'BECOME_INVISIBLE',
      id: cellId,
    })
  })

})
