var largestInteger = function (nums, k) {
  //   subarrays = [];
    let largest = -Infinity;
  for (let ele of nums) {
    let count = 0;
    result = [];
    // console.log(ele, "ele : ");
    for (let i = 0; i <= nums.length - k; i++) {
      const subarray = nums.slice(i, i + k);
      if (subarray.includes(ele)) {
        debugger;
        count++;
        result = subarray;
        // console.log(result, "----------------------");
        // console.log(count, "count : ");
      }
    }

    if (count === 1 && ele > largest) {
      debugger;
      largest = ele;
      console.log(ele, "→", result);
      // return result;
    }
  }
  console.log(largest, "largest : ");
  return largest;
};

console.log(largestInteger([3, 9, 2, 1, 7], 3));
// largestInteger([3,9,2,1,7], 3);
