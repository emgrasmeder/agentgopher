import React from 'react';
import Cell from '../components/Cell';
import {mount, shallow} from 'enzyme';

Cell.defaultProps = {
  id: 0,
  setCellColor: jest.fn(),
  color: "white",
};

describe('Cell', () => {
  it('should change from white to not white on click',()=>{
    const mockSetCellColor = jest.fn();
    const wrapper = shallow(<Cell
      color={"white"}
      setCellColor={mockSetCellColor}
    />);
    expect(mockSetCellColor).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(mockSetCellColor).toHaveBeenCalledTimes(1);
  });

  it('should change from not white to white on click',()=>{
    const mockSetCellColor = jest.fn();
    const wrapper = shallow(<Cell
      color={"cadetblue"}
      setCellColor={mockSetCellColor}
    />);
    expect(mockSetCellColor).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(mockSetCellColor).toHaveBeenCalledTimes(1);
  });

});