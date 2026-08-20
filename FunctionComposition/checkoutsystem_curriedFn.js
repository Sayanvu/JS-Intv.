const applyDiscount = discount => price => price - (price * discount) / 100;
const discountedPrice = applyDiscount(10); 
console.log(discountedPrice(100));