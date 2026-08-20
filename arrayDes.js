let hello=function(){
    console.log("Hello");
    let temp = 0;
    let array = [10,21,8,-1,9,2,1,99,22,78,109,11];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            
        }
    }
    console.log(array);
}
let res = hello();