import reducer from '../reducers';
import deepFreeze from 'deep-freeze';
import * as actions from '../actions';

describe('reducers', () => {
  it('should not mutate', () => {
    const oldState = { cells: [{ id: 1, color: "white" }] };
    deepFreeze(oldState);
    const newState = reducer(oldState, {
      type: 'SET_CELL_COLOR',
      value: { id: 1, color: "cadetblue" }
    });
    expect(newState).toEqual({ cells: [{ id: 1, color: "cadetblue" }] });
  });

  it('should put fetched cells in state', () => {
    const oldState = { cells: [{ id: 1, color: "white" }] };
    const cell = oldState.cells[0];
    const action = actions.setCellColor(cell.id, "cadetblue");
    const newState = reducer(oldState, action);
    expect(newState.cells[0].id).toBe(cell.id);
    expect(newState.cells[0].color).not.toBe("white");
  });

  it('should only replace the changed cell', () => {
    const oldState = { cells: [{ id: 1, color: "cadetblue" }, { id: 2, color: "cadetblue" }] };
    const cellToChange = oldState.cells[0];
    const action = actions.setCellColor(cellToChange.id, "white");
    const newState = reducer(oldState, action);
    expect(newState.cells).toEqual([
      { id: 1, color: "white" },
      { id: 2, color: "cadetblue" }]);
  });

});