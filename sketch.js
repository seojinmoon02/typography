let titleText = "Fidget Toype.";
let currentText = "_";
let i = 0;
let typingSpeed = 150; // 타이핑 속도 조절

let defaultText =
  "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.";

function setup() {
  noCanvas();

  // 타이핑 효과
  let title = select('#title');
  title.html('_');
  let interval = setInterval(() => {
    if (i < titleText.length) {
      currentText += titleText.charAt(i);
      title.html(currentText + "<span class='cursor'>|</span>");
      i++;
    } else {
      clearInterval(interval);
      title.html(currentText);
    }
  }, typingSpeed);

  // hover 이벤트 설정
  let contentP = select('.content p');

  let hand = select('.hand li a');
  let stamp = select('.stamp li a');
  let type = select('.type li a');

  hand.mouseOver(() => {
    contentP.html("This section explores handwriting-based fidget sketches.");
  });
  hand.mouseOut(() => {
    contentP.html(defaultText);
  });

  stamp.mouseOver(() => {
    contentP.html("Playful stamp-based interactive sketches.");
  });
  stamp.mouseOut(() => {
    contentP.html(defaultText);
  });

  type.mouseOver(() => {
    contentP.html("Type-inspired generative experiments.");
  });
  type.mouseOut(() => {
    contentP.html(defaultText);
  });
}
