function lensDeflection(dx, dy, strength) {
  let r2 = dx * dx + dy * dy + 100;
  let r = Math.sqrt(r2);

  let factor = strength / (r2 * r);

  return {
    x: dx * factor,
    y: dy * factor
  };
}
