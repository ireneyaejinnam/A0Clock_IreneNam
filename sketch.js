function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  var s = second();
  var m = minute();
  var h = hour();

  noStroke();
  fill(212,154,44);
  arc(250, 100, 100, 100, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
  fill(255, 204, 0);
  arc(250, 100, 80, 80, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
  if (h > 5) {
    fill(255, 0, 0);
    circle(270, 90, 7.5, 7.5);
  }
  if (h > 10) {
    fill(255, 0, 0);
    circle(265, 120, 7.5, 7.5);
  }
  if (h > 15) {
    fill(255, 0, 0);
    circle(230, 125, 7.5, 7.5);
  }
  if (h > 20) {
    fill(255, 0, 0);
    circle(240, 100, 7.5, 7.5);
  }
  if (h > 21) {
    fill(255, 0, 0);
    circle(227, 80, 7.5, 7.5);
  }
  if (h==0){
    background(220);
  }
  
  fill(212,154,44);
  arc(250, 250, 100, 100, PI*1.5, map(m, 0, 60, PI*1.5, PI*3.5), PIE);
  fill(255, 204, 0);
  arc(250, 250, 80, 80, PI*1.5, map(m, 0, 60, PI*1.5, PI*3.5), PIE);
  if (m > 13) {
    fill(255, 0, 0);
    circle(270, 240, 7.5, 7.5);
  }
  if (m > 26) {
    fill(255, 0, 0);
    circle(265, 270, 7.5, 7.5);
  }
  if (m > 38) {
    fill(255, 0, 0);
    circle(230, 275, 7.5, 7.5);
  }
  if (m > 51) {
    fill(255, 0, 0);
    circle(240, 250, 7.5, 7.5);
  }
  if (m > 53) {
    fill(255, 0, 0);
    circle(227, 230, 7.5, 7.5);
  }
  if (m==0){
    background(220);
    noStroke();
    fill(212,154,44);
    arc(250, 100, 100, 100, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
    fill(255, 204, 0);
    arc(250, 100, 80, 80, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
    if (h > 5) {
      fill(255, 0, 0);
      circle(270, 90, 7.5, 7.5);
    }
    if (h > 10) {
      fill(255, 0, 0);
      circle(265, 120, 7.5, 7.5);
    }
    if (h > 15) {
      fill(255, 0, 0);
      circle(230, 125, 7.5, 7.5);
    }
    if (h > 20) {
      fill(255, 0, 0);
      circle(240, 100, 7.5, 7.5);
    }
    if (h > 21) {
      fill(255, 0, 0);
      circle(227, 80, 7.5, 7.5);
    }
  }
  
  fill(212,154,44);
  arc(250, 400, 100, 100, PI*1.5, map(s, 0, 60, PI*1.5, PI*3.5), PIE);
  fill(255, 204, 0);
  arc(250, 400, 80, 80, PI*1.5, map(s, 0, 60, PI*1.5, PI*3.5), PIE);
  if (s > 13) {
    fill(255, 0, 0);
    circle(270, 390, 7.5, 7.5);
  }
  if (s > 26) {
    fill(255, 0, 0);
    circle(265, 420, 7.5, 7.5);
  }
  if (s > 38) {
    fill(255, 0, 0);
    circle(230, 425, 7.5, 7.5);
  }
  if (s > 51) {
    fill(255, 0, 0);
    circle(240, 400, 7.5, 7.5);
  }
  if (s > 53) {
    fill(255, 0, 0);
    circle(227, 380, 7.5, 7.5);
  }
  if (s==0){
    background(220);
    noStroke();
    fill(212,154,44);
    arc(250, 100, 100, 100, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
    fill(255, 204, 0);
    arc(250, 100, 80, 80, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
    if (h > 5) {
      fill(255, 0, 0);
      circle(270, 90, 7.5, 7.5);
    }
    if (h > 10) {
      fill(255, 0, 0);
      circle(265, 120, 7.5, 7.5);
    }
    if (h > 15) {
      fill(255, 0, 0);
      circle(230, 125, 7.5, 7.5);
    }
    if (h > 20) {
      fill(255, 0, 0);
      circle(240, 100, 7.5, 7.5);
    }
    if (h > 21) {
      fill(255, 0, 0);
      circle(227, 80, 7.5, 7.5);
    }
    if (h==0){
      background(220);
    }
  
    fill(212,154,44);
    arc(250, 250, 100, 100, PI*1.5, map(m, 0, 60, PI*1.5, PI*3.5), PIE);
    fill(255, 204, 0);
    arc(250, 250, 80, 80, PI*1.5, map(m, 0, 60, PI*1.5, PI*3.5), PIE);
    if (m > 13) {
      fill(255, 0, 0);
      circle(270, 240, 7.5, 7.5);
    }
    if (m > 26) {
      fill(255, 0, 0);
      circle(265, 270, 7.5, 7.5);
    }
    if (m > 38) {
      fill(255, 0, 0);
      circle(230, 275, 7.5, 7.5);
    }
    if (m > 51) {
      fill(255, 0, 0);
      circle(240, 250, 7.5, 7.5);
    }  
    if (m > 53) {
      fill(255, 0, 0);
      circle(227, 230, 7.5, 7.5);
    }
    if (m==0){
      background(220);
      noStroke();
      fill(212,154,44);
      arc(250, 100, 100, 100, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
      fill(255, 204, 0);
      arc(250, 100, 80, 80, PI*1.5, map(h, 0, 24, PI*1.5, PI*3.5), PIE);
      if (h > 5) {
        fill(255, 0, 0);
        circle(270, 90, 7.5, 7.5);
      }
      if (h > 10) {
        fill(255, 0, 0);
        circle(265, 120, 7.5, 7.5);
      }
      if (h > 15) {
        fill(255, 0, 0);
        circle(230, 125, 7.5, 7.5);
      }
      if (h > 20) {
        fill(255, 0, 0);
        circle(240, 100, 7.5, 7.5);
      }
      if (h > 21) {
        fill(255, 0, 0);
        circle(227, 80, 7.5, 7.5);
      }
    }
  }
}