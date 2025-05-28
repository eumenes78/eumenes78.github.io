let pelicanX;
let pelicanY;
let pelicanVY = 0; // vertical velocity for jumping
let speedX;
let direction = 1;
let gravity = 0.8;
let jumpForce = -15;
let groundLevel;
let isOnGround = true;
let canDoubleJump = false; // Track if double jump is available

let trail = [];
let clouds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor(); // Hide default cursor
  pelicanX = 0;
  groundLevel = height * 0.8 - 40; // Ground surface minus pelican height
  pelicanY = groundLevel;
  speedX = 2;

  // Create initial clouds
  for (let i = 0; i < 5; i++) {
    clouds.push({
      x: random(width),
      y: random(50, height * 0.4),
      speed: random(0.3, 1),
    });
  }
}

function draw() {
  background(135, 206, 250); // sky blue

  // Draw and move clouds
  drawClouds();

  // ground
  fill(50, 200, 70);
  noStroke();
  rect(0, height * 0.8, width, height * 0.2);

  // trail
  drawTrail();

  drawPelicanOnBike(pelicanX, pelicanY);

  // Apply gravity and update pelican position
  pelicanVY += gravity;
  pelicanY += pelicanVY;
  pelicanX += speedX * direction;

  // Ground collision detection
  if (pelicanY >= groundLevel) {
    pelicanY = groundLevel;
    pelicanVY = 0;
    isOnGround = true;
    canDoubleJump = false; // Reset double jump when landing
  } else {
    isOnGround = false;
  }

  // Add trail puff
  trail.push({ x: pelicanX, y: pelicanY + 35, alpha: 255 });

  // Reverse direction at edges
  if (pelicanX > width + 100 || pelicanX < -100) {
    direction *= -1;
  }

  // Limit trail length
  if (trail.length > 100) {
    trail.shift();
  }
  
  // Draw butterfly cursor
  drawButterflyAt(mouseX, mouseY);
}

function drawClouds() {
  noStroke();
  fill(255);

  for (let c of clouds) {
    ellipse(c.x, c.y, 60, 40);
    ellipse(c.x + 25, c.y + 5, 50, 30);
    ellipse(c.x - 25, c.y + 10, 40, 25);
    c.x -= c.speed;
    if (c.x < -80) {
      c.x = width + 80;
      c.y = random(50, height * 0.4);
    }
  }
}

function drawTrail() {
  noStroke();
  for (let t of trail) {
    fill(255, 255, 255, t.alpha);
    ellipse(t.x, t.y, 20);
    t.alpha -= 3; // fade out
  }
}

function drawPelicanOnBike(x, y) {
  push();
  translate(x, y);
  scale(direction, 1); // flip for left/right

  // Draw wheels
  fill(0);
  ellipse(-40, 40, 40, 40); // back wheel
  ellipse(40, 40, 40, 40);  // front wheel

  // Frame
  stroke(80);
  strokeWeight(4);
  line(-40, 40, 0, 10);
  line(0, 10, 40, 40);
  line(0, 10, 0, -20);

  // Body
  noStroke();
  fill(255, 255, 200);
  ellipse(0, -40, 50, 60); // body

  // Head
  ellipse(0, -70, 30, 30);
  fill(255, 150, 0);
  triangle(15, -70, 45, -60, 15, -60); // beak

  // Eye
  fill(0);
  ellipse(5, -75, 5, 5);

  // Legs
  stroke(255, 150, 0);
  strokeWeight(3);
  line(-10, -10, -20, 30);
  line(10, -10, 20, 30);

  pop();
}

function drawButterflyAt(x, y) {
  push();
  translate(x, y);
  
  // Butterfly wings
  noStroke();
  
  // Left wing (top)
  fill(255, 100, 150, 200); // Pink
  ellipse(-8, -8, 15, 20);
  
  // Right wing (top)
  fill(150, 100, 255, 200); // Purple
  ellipse(8, -8, 15, 20);
  
  // Left wing (bottom)
  fill(255, 150, 100, 200); // Orange
  ellipse(-6, 5, 12, 15);
  
  // Right wing (bottom)
  fill(100, 255, 150, 200); // Green
  ellipse(6, 5, 12, 15);
  
  // Body
  fill(80, 50, 30);
  ellipse(0, 0, 3, 20);
  
  // Antennae
  stroke(80, 50, 30);
  strokeWeight(1);
  line(-2, -10, -4, -15);
  line(2, -10, 4, -15);
  
  // Antennae tips
  noStroke();
  fill(255, 200, 0);
  ellipse(-4, -15, 2, 2);
  ellipse(4, -15, 2, 2);
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  groundLevel = height * 0.8 - 40; // Update ground level when window resizes
}

function keyPressed() {
  // Jump when spacebar is pressed
  if (key === ' ') {
    if (isOnGround) {
      // First jump from ground
      pelicanVY = jumpForce;
      isOnGround = false;
      canDoubleJump = true; // Enable double jump after first jump
    } else if (canDoubleJump) {
      // Double jump in air
      pelicanVY = jumpForce * 0.8; // Slightly weaker double jump
      canDoubleJump = false; // Use up the double jump
    }
  }
  
  // Change direction with arrow keys
  if (keyCode === LEFT_ARROW) {
    direction = -1; // Move left
  } else if (keyCode === RIGHT_ARROW) {
    direction = 1;  // Move right
  }
}
