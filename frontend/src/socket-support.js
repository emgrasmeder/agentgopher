
        var urlMySocket = "ws://localhost:9000/";
        var ctSeconds = 0;
        
        var mySocket = new WebSocket (urlMySocket); 
        mySocket.onopen = function (evt) {
          mySocket.send (s);
        };
        mySocket.onmessage = function (evt) {
          $("#idWebSocketTime").text ("The call to the server took " + secondsSince (whenstart) + " secs.");
          callback (evt.data);
          mySocket.close ();
        };
		<script>
			$(document).ready (function () {
				startup ();
				});
			</script>
