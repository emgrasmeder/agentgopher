import React from 'react';
import Cell from '../components/Cell';
import {mount, shallow} from 'enzyme';

Cell.defaultProps = {
  id: 0,
  becomeInvisible: jest.fn(),
  becomeVisible: jest.fn(),
  hidden: true,
};

describe('Cell', () => {
  it('should change from hidden to not hidden on click',()=>{
    const mockBecomeVisible = jest.fn();
    const mockBecomeInvisible = jest.fn();
    const wrapper = shallow(<Cell
      hidden={true}
      becomeVisible={mockBecomeVisible}
    />);
    expect(mockBecomeVisible).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(mockBecomeVisible).toHaveBeenCalledTimes(1);
  });

  it('should change from not hidden to hidden on click',()=>{
    const mockBecomeVisible = jest.fn();
    const mockBecomeInvisible = jest.fn();
    const wrapper = shallow(<Cell
      hidden={false}
      becomeInvisible={mockBecomeInvisible}
    />);
    expect(mockBecomeInvisible).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(mockBecomeInvisible).toHaveBeenCalledTimes(1);
  });

});