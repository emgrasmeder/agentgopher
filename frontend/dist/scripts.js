"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var hideToggle = exports.hideToggle = function hideToggle(element) {
    if (element.className == "redCell") {
        element.className = "cell";
    } else {
        element.className = "redCell";
    }
};

var incrementValue = exports.incrementValue = function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    if (value > 2) {
        hideToggle();
    }
};