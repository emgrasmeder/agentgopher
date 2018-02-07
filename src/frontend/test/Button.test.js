import React from 'react';
import Button from '../components/Button';
import {mount, shallow} from 'enzyme';

Button.defaultProps = {
  clearAll: jest.fn(),
};

describe('Button', () => {
  it('should call clearAll on click',()=>{
    const mockClearAll = jest.fn();
    const wrapper = shallow(<Button
      clearAll={mockClearAll}
    />);
    expect(mockClearAll).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(mockClearAll).toHaveBeenCalledTimes(1);
  });

});