let titleText = "Fidget Toype.";
let currentText = "_";
let i = 0;
let typingSpeed = 150; // 밀리초 단위, 타이핑 속도 조절

function setup() {
 noCanvas(); // 캔버스 안 씀
  let title = select('#title');
  title.html('_'); // 초기화

  // 글자를 하나씩 추가
  let interval = setInterval(() => {
    if (i < titleText.length) {
      currentText += titleText.charAt(i);
      title.html(currentText + "<span class='cursor'>|</span>");
      i++;
    } else {
      clearInterval(interval);
      title.html(currentText); // 마지막에 커서 제거
    }
  }, typingSpeed);
}
