let flatArray = function(){
    let array = [10,[12,31,[74],[1],[99,[11],77]]];
    let flatArray = array.flat(Infinity);
    console.log(flatArray);
}
flatArray();