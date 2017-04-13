function drawGrid(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
    function D() {
        for (var e = 0; e < t.length; e++) t[e].value = d3.round(Math.random() * .6);
        b.transition().delay(o * .1).duration(o * .9).attr("fill", function(e, t) {
            return y(e.value)
        })
    }

    function P() {
        hash = jQuery(location).attr("hash");
        if (hash.length !== 0) {
            t = readCustomPickle(hash, t);
            b.transition().delay(o * .1).duration(o * .9).attr("fill", function(e, t) {
                return y(e.value)
            })
        }
    }
    var v = d3.select(e).append("svg").attr("width", n).attr("height", r).attr("class", "grid"),
        m = v.append("g"),
        g = d3.select(c),
        y = d3.scale.ordinal().range([color1, color2]),
        b = m.selectAll("boxes").data(t).enter().append("rect").attr({
            height: s,
            width: i,
            x: function(e) {
                return e.x
            },
            y: function(e) {
                return e.y
            },
            fill: function(e, t) {
                return y(e.value)
            },
            stroke: strokeColor
        }).on("click", function() {
            element = d3.select(this);
            val = element.data()[0].value;
            if (val === 0) {
                element.data()[0].value = 1;
                element.attr({
                    fill: function(e, t) {
                        return y(e.value)
                    }
                })
            } else {
                element.data()[0].value = 0;
                element.attr({
                    fill: function(e, t) {
                        return y(e.value)
                    }
                })
            }
        }).on("mouseout", function() {
            element = d3.select(this);
            element.attr("fill", function(e, t) {
                return y(e.value)
            })
        }).on("mouseover", function() {
            element = d3.select(this);
            element.attr("fill", color2)
        }),
        w = d3.select(u),
        E = 0,
        S = null;
    w.on("click", function() {
        if (E === 0) {
            M(S);
            E = 1;
        }
    });
    var x = d3.select(a);
    x.on("click", function() {
        if (E === 1) {
            clearInterval(S);
            E = 0;
        }
    });
    var T = d3.select(f);
    T.on("click", function() {
        if (E === 1) {
            clearInterval(S);
            E = 0;
        } else if (E === 0) {
        }
    });
    var N = d3.select(l);
    N.on("click", function() {
        if (E === 1) {
            clearInterval(S);
            E = 0;
            D();
        } else if (E === 0) {
            D();
        }
    });
    var C = d3.select(h);
    C.on("click", function() {
        if (E === 1) {
            clearInterval(S);
            E = 0;
            hash = writeCustomPickle(t);
            window.location.hash = hash;
        } else if (E === 0) {
            hash = writeCustomPickle(t);
            window.location.hash = hash;
        }
    });
    var k = d3.select(p);
    k.on("click", function() {
        if (E === 1) {
            clearInterval(S);
            E = 0;
            P();
        } else if (E === 0) {
            P();
        }
    });
    var L = d3.select(d);
    L.on("click", function() {
        element = d3.select(this);
        if (E === 1) {
            clearInterval(S);
            E = 0;
            hash = writeCustomPickle(t);
            window.location.hash = hash;
            href = window.location.href;
            if (hash.length > 0) {
                href2 = href.split("#");
                href3 = href2[0] + "%23" + href2[1]
            } else href3 = href;
            element.attr("href", link);
        } else if (E === 0) {
            hash = writeCustomPickle(t);
            window.location.hash = hash;
            href = window.location.href;
            if (hash.length > 0) {
                href2 = href.split("#");
                href3 = href2[0] + "%23" + href2[1] + "&"
            } else href3 = href + "&";
            element.attr("href", link);
        }
    })
}

var hashLength = 16;
var strokeColor = "#b3deff";
var color1 = "#caccd5";
var color2 = "#0074cc";
