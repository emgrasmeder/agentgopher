let websocket;

export const websocketMiddleware = store => next => action => {
  switch (action.type) {
    case 'WEBSOCKET:CONNECT':
      //TODO: Should reset frontend and clear Agents state when connection handshake is successful
      websocket = new WebSocket(action.payload.url);
      websocket.onopen = () => websocket.send(JSON.stringify({
        messageType: 'announcement',
        content: { message: 'ready' }
      }));
      websocket.onclose = (event) => store.dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      websocket.onmessage = (event) => store.dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });
      break;
    case 'WEBSOCKET:SEND':
      console.log("trying to send: ",action.payload)
      websocket.send(JSON.stringify(action.payload));
      break;
    case 'WEBSOCKET:DISCONNECT':
      websocket.close();
      break;
    default:
      break;
  }

  return next(action);
};