var r, i = 0,
    start = true,
    frmRate = 10,
    factor = 2,
    points = 5,
    interval = 5,
    points_limit = 110,
    ppoints = points - interval,
    circle_style = 'white',
    line_style = 'white',
    dot_style = 'white',
    circle_width = 3,
    line_width = 1,
    dot_width = 5;

var canvas, ctx;

function mapNumber(num, in_start, in_end, out_start, out_end) {
    var slope = (out_end - out_start) / (in_end - in_start)
    var output = out_start + slope * (num - in_start)

    return output;
}

function getVector(index, points) {
    var vector = {
        x: 0,
        y: 0
    };
    const angle = mapNumber(index % points, 0, points, 0, 2 * Math.PI);
    vector.x = r * Math.cos(angle + Math.PI);
    vector.y = r * Math.sin(angle + Math.PI);
    return vector;
}

function drawLines(ctx, index, vector1, vector2) {
    ctx.moveTo(vector1.x, vector1.y);
    ctx.lineTo(vector2.x, vector2.y);


    if (start) {
        for (var j = 0; j < index; j++) {
            var a = getVector(j, points);
            var b = getVector(j * factor, points);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
        }
    } else {
        for (var j = 0; j < index; j++) {
            var a = getVector(j, points);
            var b = getVector(j * factor, points);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
        }
        for (var j = index - 1; j < ppoints; j++) {
            var a = getVector(j, ppoints);
            var b = getVector(j * factor, ppoints);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
        }
    }

}

// function drawLines(ctx, index, vector1, vector2) {
//     ctx.moveTo(vector1.x, vector1.y);
//     ctx.lineTo(vector2.x, vector2.y);


//     for (var j = 0; j < index; j++) {
//         var a = getVector(j, points);
//         var b = getVector(j * factor, points);
//         ctx.moveTo(a.x, a.y);
//         ctx.lineTo(b.x, b.y);
//     }

// }

function drawPreload() {

    ctx.clearRect(-2 * r, -2 * r, canvas.width + r, canvas.height + r);

    ctx.beginPath();
    ctx.lineWidth = circle_width;
    ctx.strokeStyle = circle_style;
    ctx.arc(0, 0, r, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = line_width;
    ctx.strokeStyle = line_style;

    var a = getVector(i, points);
    var b = getVector(i * factor, points);

    drawLines(ctx, i, a, b);

    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = dot_style;
    ctx.arc(b.x, b.y, dot_width, 0, 2 * Math.PI);
    ctx.fill();

    i += 1;

    // points += 1;

    if (i > points) {
        ppoints = points;
        points += interval;
        i = 0;
    }
    if (start) start = !start;
    if (points > points_limit) points = points_limit;

}

// JQuery Preloadinator 
//   MIT License
// Copyright (c) 2018 Leon Burman
// source: https://p.bdir.in/p/Minimal-LoaderPreloader-Plugin---jQuery-preloadinator/15890
! function(a) {
    a.fn.preloadinator = function(e) {
        "use strict";
        var o = a.extend({ scroll: !1, minTime: 0, animation: "fadeOut", animationDuration: 400, afterDisableScroll: function() {}, afterEnableScroll: function() {}, afterRemovePreloader: function() {} }, e),
            n = this,
            r = (new Date).getTime();
        return a.fn.preloadinator.disableScroll = function() { a("body").css("overflow", "hidden"), "function" == typeof o.afterDisableScroll && o.afterDisableScroll.call(this) }, a.fn.preloadinator.enableScroll = function() { a("body").css("overflow", "auto"), "function" == typeof o.afterEnableScroll && o.afterEnableScroll.call(this) }, a.fn.preloadinator.removePreloader = function() { a(n)[o.animation](o.animationDuration, function() {!1 === o.scroll && a.fn.preloadinator.enableScroll(), "function" == typeof o.afterRemovePreloader && o.afterRemovePreloader.call(this) }) }, a.fn.preloadinator.minTimeElapsed = function() { return (new Date).getTime() - r >= o.minTime }, !1 === o.scroll && a.fn.preloadinator.disableScroll(), a(window).on("load", function() {
            if (a.fn.preloadinator.minTimeElapsed()) a.fn.preloadinator.removePreloader();
            else {
                var e = (new Date).getTime() - r;
                setTimeout(a.fn.preloadinator.removePreloader, o.minTime - e)
            }
        }), this
    }
}(jQuery); ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////

// $(window).on('load', function() {
//     $('#preloader').fadeOut(2000, function() {
//         $('main').fadeIn('slow');
//     });
// });

$(function() {
    canvas = document.getElementById("preloader"),
        ctx = canvas.getContext("2d");
    r = canvas.height / 2;
    ctx.translate(r, r);
    r = r * 0.9;
    setInterval(drawPreload, frmRate);
});
