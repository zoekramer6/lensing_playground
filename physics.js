// physics.js

// This is where all gravitational lensing math will live later

function lensDeflection(dx, dy, strength) {
  let r2 = dx * dx + dy * dy + 0.0001;

  // simple toy model: deflection ~ 1/r^2
  let factor = strength / r2;

  return {
    x: dx * factor,
    y: dy * factor
  };
}
