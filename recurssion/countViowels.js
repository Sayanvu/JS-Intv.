function countViowels(str){
    let vCount = 0;
    if(str.length === 0){
        return 0;
    }
    else{
        console.log('aeiou'.includes(str[0]),"[[[[]]]]")
        if('aeiou'.includes(str[0])){
            // vCount++;
            return countViowels(str.slice(1)) + 1
        }
        else{
            return countViowels(str.slice(1)) + 0;
        }
        return vCount;
    }
}
console.log(countViowels("Helloworld"))