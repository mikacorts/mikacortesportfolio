const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const groundHeight = 30;
const dino = {
  x: 50,
  y: canvas.height - groundHeight - 50,
  width: 80,
  height: 100,
  dy: 0,
  gravity: 2,
  jumpPower: -25,
  grounded: true,
  img: new Image()
};

const obstacle = {
  x: canvas.width,
  y: canvas.height - groundHeight - 100,
  width: 45,
  height: 100,
  dx: 10,
  img: new Image()
};

dino.img.src = 'dino.png'; // Dino sprite
obstacle.img.src = 'cactus.png'; // Cactus sprite

let score = 0;
let gameOver = false;

function drawGround() {
  ctx.fillStyle = "#444";
  ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
}

function drawDino() {
  ctx.drawImage(dino.img, dino.x, dino.y, dino.width, dino.height);
}

function drawObstacle() {
  ctx.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function drawScore() {
  ctx.fillStyle = "#333";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 30);
}

function update() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dino jump
  dino.y += dino.dy;
  dino.dy += dino.gravity;

  if (dino.y >= canvas.height - groundHeight - dino.height) {
    dino.y = canvas.height - groundHeight - dino.height;
    dino.dy = 0;
    dino.grounded = true;
  }

  // Obstacle movement
  obstacle.x -= obstacle.dx;
  if (obstacle.x + obstacle.width < 0) {
    obstacle.x = canvas.width + Math.random() * 300;
    score++;
  }

  // Collision detection
  if (
    dino.x < obstacle.x + obstacle.width &&
    dino.x + dino.width > obstacle.x &&
    dino.y < obstacle.y + obstacle.height &&
    dino.y + dino.height > obstacle.y
  ) {
    gameOver = true;
    setTimeout(() => {
      alert("Game Over! Your score: " + score);
      location.reload();
    }, 100);
  }

  drawGround();
  drawDino();
  drawObstacle();
  drawScore();

  requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && dino.grounded) {
    dino.dy = dino.jumpPower;
    dino.grounded = false;
  }
});

update();
