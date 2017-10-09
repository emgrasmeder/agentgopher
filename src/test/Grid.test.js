import React from 'react';
import Grid from '../Grid';
import { mount, shallow } from 'enzyme';
import { Server } from 'mock-socket';

describe('Grid', () => {
  const mockServer = new Server('ws://localhost:8080/echo');

  it('should change state onMessage', (done) => {
    expect.assertions(1);
    const message = 'hello world';
    mockServer.on('connection', server => {
      mockServer.send(message);
    });

    const wrapper = shallow(<Grid websocket={mockServer} />);
    setTimeout(() => {
      console.log(wrapper.state().messages)
      expect(wrapper.state().messages).toEqual(message)
      done();
    }, 10)

  });

  describe.skip('Websocket connection', () => {
    it('should do handshake', (done) => {
      mockServer.on('connection', server => {
        mockServer.send('test message 1');
        mockServer.send('test message 2');
      });

      const wrapper = mount(<Grid websocket={mockServer} />);
      setTimeout(() => {
        expect(wrapper.state().messages).toBe(999)

        mockServer.stop(done);
      }, 100);
    });
  });
});


 
