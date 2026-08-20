// Palindrome check
//  Input: "madam"
//  Output: true

((string)=>{let stringCheck = string.split('').reverse().join(''); console.log(stringCheck); console.log(string === stringCheck); return string === stringCheck})("madam");