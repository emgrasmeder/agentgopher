// // Open the socket
// socket.onopen = function(event) {
//
//   // Send an initial message
//   socket.send('I am the client and I\'m listening!');
//
//   // Listen for messages
//   socket.onmessage = function(event) {
//     console.log('Client received a message',event);
//   };
//
//   // Listen for socket closes
//   socket.onclose = function(event) {
//     console.log('Client notified socket has closed',event);
//   };
//
//   // To close the socket....
//   socket.close()
//
// };

// Create a socket instance
// var socket = new WebSocket('ws://localhost:63342');

export const hideToggle = function (element) {
    if (element.className == "redCell") {
        element.className = "cell";
    } else {
        element.className = "redCell";
    }
}

export const incrementValue = function() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    if (value > 2) {
        hideToggle();
    }
}