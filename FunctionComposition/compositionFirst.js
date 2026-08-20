function addition(x) {
    console.log(x+1);
    return x + 1; //11
}

function multiplication(x) {
    console.log(x*2);
    return x * 2; //20
}

function division(x) {
    console.log(x/2);
    return x / 2; //5
}

function substraction(x) {
    console.log(x - 1);
    return x - 1; //9
}

let result = (division, substraction,addition,multiplication)//(11,20,5,9)
// let result = [
//     addition,
//     multiplication,
//     division,
//     substraction
// ];
//console.log(result[1](10)); // Output: 11
console.log(result(10));