import React from 'react';
import Grid from '../components/Grid';
import { mount, shallow } from 'enzyme';
import { Server } from 'mock-socket';

Grid.defaultProps = {
  setupDefault: jest.fn(),
};


const mockServer = new Server('ws://localhost:8080/echo');
describe('Grid', () => {


  describe('Websocket connection', () => {
    it('should change state on default Message', (done) => {
      expect.assertions(1);
      const message = 'hello world';

      const wrapper = shallow(<Grid websocket={mockServer} />);
      mockServer.send(message);

      setTimeout(() => {
        expect(wrapper.state().messages).toEqual(message)
        done();
      }, 100)

    });
  });

  describe('Websocket message parsing', () => {
    it('should dispatch setupDefault when receiving message of type SETUP_DEFAULT', (done) => {
      expect.assertions(1);
      const message = "SETUP_DEFAULT";
      const setupDefaultMock = jest.fn();

      mockServer.on('connection', server => {
        mockServer.send(message);
      });

      const wrapper = shallow(<Grid
        setupDefault={setupDefaultMock}
        websocket={mockServer}
      />);

      setTimeout(() => {
        expect(setupDefaultMock).toHaveBeenCalledTimes(1)
        done();
      }, 100)

    });
  });
});


 
