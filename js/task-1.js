function isEnoughCapacity(products, containerSize) {
  const values = Object.values(products);
  console.log(values);
  let totalWer = 0;

  for (let i = 0; i < values.length; i++) {
    totalWer += values[i];
  }
  if (totalWer > containerSize) {
    return false;
  } else {
    return true;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 3 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
