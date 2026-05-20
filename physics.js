function lensDeflection(dx, dy, strength) {
  let r2 = dx * dx + dy * dy + 0.0001;

  let factor = strength / r2;

  return {
    x: dx * factor,
    y: dy * factor
  };
}
