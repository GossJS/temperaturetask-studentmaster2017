function transformFahrToCels(degrees) {
  return (5 / 9) * (degrees - 32);
}

const f1 = 451;
console.log(transformFahrToCels(f1)); // 232.777
