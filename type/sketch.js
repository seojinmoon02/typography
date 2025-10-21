let word = "type.";
let typedCount = 0;
let baseColor, typedColor;

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(64);

  baseColor = color(165, 42, 42, 90); // 연한 브라운
  typedColor = color(0); // 검정색
}

function draw() {
  background(255, 253, 248);

  let spacing = 50;
  let startX = width / 2 - ((word.length - 1) * spacing) / 2;

  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    fill(i < typedCount ? typedColor : baseColor);
    text(c, startX + i * spacing, height / 2);
  }

  // 깜빡이는 캐럿
  if (typedCount < word.length && frameCount % 60 < 30) {
    let caretX = startX + typedCount * spacing + 10;
    stroke(0);
    strokeWeight(2);
    line(caretX, height / 2 - 25, caretX, height / 2 + 25);
  }
  noStroke();
}

function keyTyped() {
  if (typedCount < word.length && key === word[typedCount]) {
    typedCount++;
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    typedCount = 0; // Enter로 리셋
  }
}
  