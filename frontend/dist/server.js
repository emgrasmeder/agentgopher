'use strict';

var _ws = require('ws');

var wss = new _ws.Server({ port: 8080 });
wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message);
  });
  ws.send('something');
});