//  Input: ["eat","tea","tan","ate","nat","bat"]
//  Output: [["eat","tea","ate"],["tan","nat"],["bat"]]





var groupAnagrams = function(strs) {

    let map = new Map();

    for(let i=0; i<strs.length; i++){
        const w = strs[i].split("").sort().join("");
        map.has(w) ? map.get(w).push(strs[i]) : map.set(w,[strs[i]]);
    }
    return Array.from(map.values());

}

let res = groupAnagrams(["eat","eat","tea","tan","ate","nat","bat"]);
console.log(res);