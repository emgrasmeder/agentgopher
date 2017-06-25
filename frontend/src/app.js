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