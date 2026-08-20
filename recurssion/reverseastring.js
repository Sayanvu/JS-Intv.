function reverseString(str, left = 0, right = str.length - 1) {
    let arr = str.split('');
    if (left >= right) {
        return arr.join('');
    }
    let t = arr[left];
    arr[left] = arr[right];
    arr[right] = t;

    return reverseString(arr.join(''), left + 1, right - 1);
}

// console.log(reverseString('helloworld'))


function reverseStr(str){
    str = str.split('');
    left = 0;
    right= str.length-1;
    function helper(str,left,right){
        if(left>=right){
            return;
        }
        let t = str[left];
        str[left] = str[right];
        str[right] = t;
        helper(str,left+1,right-1);
    }
    helper(str,left,right);
    return str.join('');
}

console.log(reverseStr("helloworld"));