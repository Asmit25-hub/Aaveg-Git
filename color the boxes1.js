let angle = 0;

function changeGradient() {
  const boxes = document.querySelectorAll('.box');
  angle = (angle + 10) % 360; // Rotate angle from 0 to 359
  const gradient = `linear-gradient(${angle}deg,#0000d8, #c400f5 )`;

  boxes.forEach(box => {
    box.style.background = gradient;
  });
}

setInterval(changeGradient, 500); // Change every 0.5 second



let hue = 0;

function rotateHue() {
  const boxes = document.querySelectorAll('.box');
  hue = (hue + 2) % 360; // Increment hue

  boxes.forEach(box => {
    box.style.filter = `hue-rotate(${hue}deg)`;
  });
}

setInterval(rotateHue, 100); // Adjust timing for speed
