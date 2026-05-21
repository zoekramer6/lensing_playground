let canvas, ctx;

function init() {
  canvas = document.getElementById("c");
  ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  initSource();
  initLens();
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let p of source) {

    let dx = p.x - lensX;
    let dy = p.y - lensY;

    let d = lensDeflection(dx, dy, 8000);

    let x = p.x + canvas.width/2 + d.x;
    let y = p.y + canvas.height/2 + d.y;

    ctx.globalAlpha = p.flux;
    ctx.fillRect(x,y,2,2);
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}
