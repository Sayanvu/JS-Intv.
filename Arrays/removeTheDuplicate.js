// Remove duplicate characters
//  Input: "programming"
//  Output: "progamin"


const removeDuplicate = (string) =>{
    debugger;
	let inputArr = string.split('');
	let _set = new Set();
    for (const element of inputArr) {
        _set.add(element);
    }
    return Array.from(_set.keys()).join('');
}

let result = removeDuplicate("programming");
console.log(result);