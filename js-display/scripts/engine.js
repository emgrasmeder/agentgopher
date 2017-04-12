function getNeighbors(e) {
    var t = e.ns,
        n = [];
    for (var r = 0; r < t.length; r++) {
        neighbor = t[r];
        neighbor !== -1 && n.push(neighbor)
    }
    return n
}

function sumNeighbors(e, t) {
    var r = getNeighbors(e),
        i = 0;
    for (var s = 0; s < r.length; s++) {
        n = r[s];
        t[n].value === 1 && (i += 1)
    }
    return i
}

function conwayStep(e) {
    var t = 0,
        n = 0,
        r = jQuery.extend(!0, [], e);
    for (var i = 0; i < r.length; i++) {
        ns = getNeighbors(e[i]);
        n = r[i].value;
        t = sumNeighbors(r[i], r);
        n === 1 ? t < 2 ? e[i].value = 0 : t > 3 && (e[i].value = 0) : t === 3 && (e[i].value = 1);
        t = 0
    }
    var s = 0;
    for (var o = 0; o < e.length; o++) e[o].value !== r[o].value && (s += 1);
    return e
}
