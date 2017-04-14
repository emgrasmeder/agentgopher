// A $( document ).ready() block.
$( document ).ready(function() {
});

var i = 0

function tick() {
	// getJSON queries across http for a JSON object
	$.getJSON("localhost:8080/", function(data) {
  		$("#display").html(data + " " + i)
	})
	i++

	setTimeout(tick, 1000)
}

$( window ).ready(function() {
	alert("hello world");
	setTimeout(tick, 1000)
})
