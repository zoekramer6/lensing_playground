let source = [];

function initSource() {
  for (let i = 0; i < 3000; i++) {
    let x = (Math.random()-0.5)*300;
    let y = (Math.random()-0.5)*300;

    let r2 = x*x + y*y;
    let flux = Math.exp(-r2 / 8000);

    source.push({x,y,flux});
  }
}
