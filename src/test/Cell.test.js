import React from 'react';
import Cell from '../Cell';
import {mount} from 'enzyme';

Cell.defaultProps = {
  id: 0,
  becomeInvisible: jest.fn(),
  becomeVisible: jest.fn(),
};

describe('Cell', () => {
  it('should change from not hidden to hidden (and back) on clicks',()=>{
    const wrapper = mount(<Cell/>);
    expect(wrapper.state().hidden).toEqual(false);
    wrapper.simulate('click');
    expect(wrapper.state().hidden).toEqual(true);
    wrapper.simulate('click');
    expect(wrapper.state().hidden).toEqual(false);
  });
});