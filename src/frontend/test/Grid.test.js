import React from 'react';
import Grid from '../components/Grid';
import { mount, shallow } from 'enzyme';
import { Server } from 'mock-socket';

Grid.defaultProps = {
  setCellColor: jest.fn(),
  cells: [{}],
};


const mockServer = new Server('ws://localhost:8080');
describe('Grid', () => {
  describe('Websocket message parsing', () => {
    it('should dispatch setCellColor when receiving message of type SETUP_DEFAULT', () => {
      const message = JSON.stringify({
        type:"update_color",
        id: 1,
        color: "red"
      });

      const setCellColorMock = jest.fn();

      const wrapper = shallow(<Grid
        setCellColor={setCellColorMock}
        websocket={mockServer}
      />);
      mockServer.send(message);

      expect(setCellColorMock).toHaveBeenCalledTimes(1)
      expect(setCellColorMock).toHaveBeenCalledWith(1, "red")

    });
  });
});


 
