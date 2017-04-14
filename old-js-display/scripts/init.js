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




function initData(e, t, n, r, i, s, o) {
    var u = [],
        a = 0,
        f = 0;
    s !== null && (a = s);
    o !== null && (f = o);
    var l = 0,
        c = 0,
        h = 0,
        p = 0,
        d = n,
        v = r,
        m = e * t,
        g = e - 1,
        y = t - 1,
        b, w, E, S, x, T, N, C;
    for (var k = 0; k < m; k++) {
        if (c === 0) {
            b = -1;
            w = -1;
            E = -1
        } else {
            l % (g + 1) === 0 ? b = -1 : b = p - (g + 2);
            w = p - (g + 1);
            l === g ? E = -1 : E = p - (g + 0)
        }
        S = p - 1;
        l === g ? x = -1 : x = p + 1;
        if (c === y) {
            T = -1;
            N = -1;
            C = -1
        } else {
            l % (g + 1) === 0 ? T = -1 : T = p + (g + 0);
            N = p + (g + 1);
            l === g ? C = -1 : C = p + (g + 2)
        }
        neighbors = [b, w, E, S, x, T, N, C];
        s = l * d + a;
        o = c * v + f;
        dataItem = {
            value: h,
            x: s,
            y: o,
            ns: neighbors,
            count: p
        };
        u.push(dataItem);
        p += 1;
        if (l === g) {
            l = 0;
            c += 1
        } else l += 1
    }
    i.length > 0 && (u = readCustomPickle(i, u));
    return u
}
