let lensX, lensY;

function initLens() {
  lensX = window.innerWidth/2;
  lensY = window.innerHeight/2;

  window.addEventListener("mousemove", (e) => {
    if (e.buttons) {
      lensX = e.clientX;
      lensY = e.clientY;
    }
  });
}
