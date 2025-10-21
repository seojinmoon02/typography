let items;
let keys = ['t', 'y', 'p', 'e', '.'];
let shown = [false, false, false, false, false];
let savedPos = [null, null, null, null, null]; // 사각형 좌표를 저장

// --- 타자기 효과 관련 변수 ---
let titleText = '[After typing "type.", Fold the window top to bottom like stamping.]';
let currentText = '';
let i = 0;
let typingSpeed = 60; // 타이핑 속도 (밀리초)
let titleEl;

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

    // --- 타이핑 효과 설정 ---
  titleEl = select('h1');
  titleEl.html(''); // 초기화
  typeTitle(); // 타이핑 시작
  
}

function draw() {
  clear();
  fill(23, 15, 15);

  for (let i = 0; i < items.length; i++) {
    if (!shown[i] || !savedPos[i]) continue;
    const b = savedPos[i];
    rect(b.x, b.y, b.w, b.h, 3);
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

// --- 타자기 효과 함수 ---
function typeTitle() {
  if (i < titleText.length) {
    currentText += titleText.charAt(i);
    titleEl.html(currentText + '<span class="cursor">|</span>');
    i++;
    setTimeout(typeTitle, typingSpeed);
  } else {
    titleEl.html(currentText); // 마지막에 커서 제거
  }
}

