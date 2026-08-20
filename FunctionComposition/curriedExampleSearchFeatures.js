// const products = arr => serachItem => arr.filter(item=> item.includes(serachItem))


// let data = products(['apple','pineapple','strawberry','watermelon','banana','orange']);
// console.log(data('apple'));



const hasSubstring = search => arr => arr.filter(item=> item.includes(search));
const filterApples = hasSubstring("apple");
const fruits = ['apple', 'pineapple', 'strawberry', 'watermelon', 'banana'];
console.log(filterApples(fruits));
