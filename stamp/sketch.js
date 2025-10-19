let items;
let keys = ['t', 'y', 'p', 'e', '.'];
let shown = [false, false, false, false, false];
let savedPos = [null, null, null, null, null]; // 사각형 좌표를 저장

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  //pixelDensity(1);
  rectMode(CORNER);
  noStroke();
  c.elt.style.position = 'fixed';
  c.elt.style.top = '0';
  c.elt.style.left = '0';
  c.elt.style.zIndex = '9999';
  c.elt.style.pointerEvents = 'none';
  c.elt.style.backgroundColor = 'transparent';

  document.documentElement.style.overflow = 'hidden';
//  document.body.style.overflow = 'hidden';

  items = Array.from(document.querySelectorAll('.item'));
}

function draw() {
  clear();
  fill(23, 15, 15);

  for (let i = 0; i < items.length; i++) {
    if (!shown[i] || !savedPos[i]) continue;
    const b = savedPos[i];
    rect(b.x, b.y, b.w, b.h, 6);
  }
}

function keyPressed() {
  const k = (key === '.') ? '.' : key.toLowerCase();
  for (let i = 0; i < keys.length; i++) {
    if (k === keys[i] && !shown[i]) {
      // 처음 나타날 때 현재 위치 저장
      const b = items[i].getBoundingClientRect();
      savedPos[i] = { x: b.left, y: b.top, w: b.width, h: b.height };
      shown[i] = true;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
