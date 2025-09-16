function setup() {
  createCanvas(600, 400); // canvas size
  background(200, 220, 255); // light bluish background

  // 2 rectangles
  fill("red"); // red
  rect(50, 50, 100, 60);
  
  fill("red"); // green -> red
  rect(200, 50, 80, 120);
  
  // 1 square
  fill("red"); // blue -> red
  square(350, 50, 70);
  
  // 1 circle
  fill("yellow"); // yellow
  ellipse(100, 250, 80, 80); // width = height for circle
  
  // 2 ellipses
  fill("yellow"); // magenta -> yellow
  ellipse(250, 250, 120, 60); // wider ellipse
  
  fill("yellow"); // cyan -> yellow
  ellipse(450, 250, 60, 120); // taller ellipse
  
  // 1 triangle
  fill(255, 165, 0); // orange
  triangle(500, 50, 550, 150, 450, 150);
  
  // 1 pentagon
  fill(128, 0, 128); // purple
  beginShape();
  vertex(150, 320);
  vertex(180, 300);
  vertex(210, 320);
  vertex(195, 355);
  vertex(165, 355);
  endShape(CLOSE);
  
  // 1 star
  fill(255, 105, 180); // pink
  drawStar(400, 330, 20, 40, 5); // function below
}

// simple star function
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
