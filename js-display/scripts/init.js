// get the window height and width
var winHeight = jQuery(window).height();
var winWidth = jQuery(window).width();
var windowHash = jQuery(location).attr('hash');

// Set Grid Width/Height to a little less than the window size
var xGridWidth = (0.70 * winWidth); // Get 70% dimension
var yGridWidth = (0.70 * winHeight); // Get 70% dimension

var xCells = 50;
var yCells = 50;

var ycellWidth = d3.round(yGridWidth / yCells) - 1;
var xcellWidth = ycellWidth;

var xWin = (xCells) * (xcellWidth);
var yWin = (yCells) * (ycellWidth);
if (yWin > yGridWidth) {
    yWin = yWin - (ycellWidth * 1.0);
}
var transTime = 1000;


var hash = jQuery(location).attr('hash');
var margin = 12;
data = initData((xCells + margin*2), (yCells + margin*2), (xcellWidth), (ycellWidth), hash, (-1 * xcellWidth * margin), (-1 * ycellWidth * margin));
drawGrid("#grid", data, xWin, yWin, xcellWidth, ycellWidth, transTime, "#start", "#stop", "#reset", "#random", "#counter", "#save", "#load", "#tweet");



