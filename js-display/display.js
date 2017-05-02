// A $( document ).ready() block.
$( document ).ready(function() {
});

var i = 0

function tick() {
	// getJSON queries across http for a JSON object
	
	$.getJSON("/helloworld.json", function(data) {
  		$("#display").html(JSON.stringify(data.Hello) + " " + i)
	})
	i++

	setTimeout(tick, 1000)
}

$( window ).ready(function() {
	setTimeout(tick, 2000)
})
