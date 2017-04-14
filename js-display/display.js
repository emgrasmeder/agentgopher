// A $( document ).ready() block.
$( document ).ready(function() {
});

var i = 0

function tick() {
	// getJSON queries across http for a JSON object
	$.getJSON("/asdf.json", function(resp) {
  		$("#display").html(resp.text + " " + i)
	})
	i++

	setTimeout(tick, 1000)
}

$( window ).ready(function() {
	setTimeout(tick, 1000)
})
