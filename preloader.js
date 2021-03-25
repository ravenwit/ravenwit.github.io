
  let r, i = 0, start = true, factor = 2, points = 10, interval = 5, ppoints = points - interval;
  let renderer;
  // function preload() {
  //   img = loadImage('https://wallpaperaccess.com/full/4516053.jpg');
  // }
  function setup() {
    renderer = createCanvas(windowWidth, windowHeight);
    // let renderer = createCanvas(60,60);
    renderer.parent("preloader");
    r = height / 2 - 16;
    frameRate(70);
  }

  function getVector(index, points) {
    const angle = map(index % points, 0, points, 0, TWO_PI);
    const v = p5.Vector.fromAngle(angle + PI);
    v.mult(r);
    return v;
  }

  function drawLines(index, vector1, vector2) {

    line(vector1.x, vector1.y, vector2.x, vector2.y);

    if (start) {
      for (let j = 0; j < index; j++) {
        const a = getVector(j, points);
        const b = getVector(j * factor, points);
        line(a.x, a.y, b.x, b.y);
      }
    } else {
      for (let j = 0; j < index; j++) {
        const a = getVector(j, points);
        const b = getVector(j * factor, points);
        line(a.x, a.y, b.x, b.y);
      }
      for (let j = index; j < ppoints; j++) {
        const a = getVector(j, ppoints);
        const b = getVector(j * factor, ppoints);
        line(a.x, a.y, b.x, b.y);
      }
    }
  }

  function draw() {
    background('#171719');
    // fill(0, 10);
    // rect(0, 0, width, height);

    translate(width / 2, height / 2);
    stroke(255, 150);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, r * 2);

    const a = getVector(i, points);
    const b = getVector(i * factor, points);

    strokeWeight(2);
    drawLines(i, a, b);

    noStroke();
    fill(255);
    ellipse(b.x, b.y, 15);
    i += 1;
    if (i > points) {
      ppoints = points; points += interval; i = 0; if (start) start = !start;
    }
  }

  // JQuery Preloadinator 
  //   MIT License
  // Copyright (c) 2018 Leon Burman
  // source: https://p.bdir.in/p/Minimal-LoaderPreloader-Plugin---jQuery-preloadinator/15890
  !function(a){a.fn.preloadinator=function(e){"use strict";var o=a.extend({scroll:!1,minTime:0,animation:"fadeOut",animationDuration:400,afterDisableScroll:function(){},afterEnableScroll:function(){},afterRemovePreloader:function(){}},e),n=this,r=(new Date).getTime();return a.fn.preloadinator.disableScroll=function(){a("body").css("overflow","hidden"),"function"==typeof o.afterDisableScroll&&o.afterDisableScroll.call(this)},a.fn.preloadinator.enableScroll=function(){a("body").css("overflow","auto"),"function"==typeof o.afterEnableScroll&&o.afterEnableScroll.call(this)},a.fn.preloadinator.removePreloader=function(){a(n)[o.animation](o.animationDuration,function(){!1===o.scroll&&a.fn.preloadinator.enableScroll(),"function"==typeof o.afterRemovePreloader&&o.afterRemovePreloader.call(this)})},a.fn.preloadinator.minTimeElapsed=function(){return(new Date).getTime()-r>=o.minTime},!1===o.scroll&&a.fn.preloadinator.disableScroll(),a(window).on("load",function(){if(a.fn.preloadinator.minTimeElapsed())a.fn.preloadinator.removePreloader();else{var e=(new Date).getTime()-r;setTimeout(a.fn.preloadinator.removePreloader,o.minTime-e)}}),this}}(jQuery);  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////


 