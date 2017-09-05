import React from 'react';
import Cell from '../Cell';
import {mount} from 'enzyme';

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