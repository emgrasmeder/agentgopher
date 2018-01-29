import { SET_CELL_COLOR } from './actionTypes';

export const setCellColor = (cellId, color) => ({
  type: SET_CELL_COLOR,
  value: { id: cellId, color: color },
});

export const websocketConnect = (url = 'ws://localhost:8080') => ({
  type: 'WEBSOCKET:CONNECT',
  payload: { url }
});

export const websocketSend = (msg = '') => ({
  type: 'WEBSOCKET:SEND',
  payload: { msg }
});
