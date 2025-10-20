function preload() {
  img = loadImage('tw.png');
}

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

  clear();

  // Draw the image.
  image(img, 0, 0, 1800, windowHeight);
}
