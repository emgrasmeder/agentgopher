import reducer from '../reducers';
import * as actions from '../actions';

describe('reducers', () => {
  it('should put fetched cells in state', () => {
    const oldState = {};
    const cell = { id: 1, hidden: true };
    const action = actions.becomeVisible(cell);
    const newState = reducer(oldState, action);
    expect(newState.cells[0].id).toBe(cell.id);
    expect(newState.cells[0].hidden).toBe(false);
  });
});