function hideToggle() {
    console.log("hello world")
    document.getElementById('box5').style.visibility = "hidden";
}

function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    if (value > 2) {
        hideToggle();
    }
}