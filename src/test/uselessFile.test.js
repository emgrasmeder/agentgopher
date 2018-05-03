import React from 'react';
import uselessFile from '../components/uselessFile';
import { mount, shallow } from 'enzyme';

describe('test suite', ()=>{
  it('should have assertions', ()=>{
    expect(1).toBe(1);
  });

  it('should be able to mock things', ()=>{
    const mockFunction = jest.fn();
    mockFunction('argument1', ['argument', 2, 'is a list']);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});




