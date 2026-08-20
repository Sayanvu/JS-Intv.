// First non-repeating char in string
//  Input: "aabbcde"
//  Output: "c"



((array) => {
    debugger;
    let map = new Map();
    let _splitArr = array.split("");
    for (let i = 0; i < _splitArr.length; i++) {
        if (map.has(_splitArr[i])) {
            map.set(_splitArr[i], map.get(_splitArr[i]) + 1);
        } else {
            map.set(_splitArr[i], 1);
        }
        console.log(map);
    }
    let unique;
    for (let [key, val] of map) {
        if (val === 1) {
            unique = key;
            break;
        }
    }
    console.log(unique);
})("aabbcde");