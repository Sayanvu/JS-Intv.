// Count vowels in string
//  Input: "javascript"
//  Output: 3

const countViowels = (str) => {
  let viowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let _strSplit = str.split("");
  for (element of _strSplit) {
    if (viowels.includes(element)) {
      count++;
    }
  }
  return count;
};

let _countViowels = countViowels("aeioujsavascript");
console.log(_countViowels);