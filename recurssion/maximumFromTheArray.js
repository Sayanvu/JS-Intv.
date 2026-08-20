function findMaximumFromArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  console.log(arr[0], arr[1], "ooooooooooooooo::::");
  if (arr[0] > arr[1]) {
    arr.splice(1, 1);
  } else {
    arr.splice(0, 1);
  }
  return findMaximumFromArray(arr);
}

console.log(findMaximumFromArray([15, 10, -1, 20, 82]));
