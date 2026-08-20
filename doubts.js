// console.log(a); 
// var a = 10;
// console.log(a);

// function test(){
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();

// console.log(typeof(NaN) === typeof(NaN));

// console.log(-1 === 0);



// test();
// console.log(a);//
// var a = 10;
// console.log(a);
// console.log(b);
// let b = 100;
// function test(){
//     console.log(b);
//     let b = 200;
//     console.log(b);
// }
// const anyFn = ()=>{

// }



// function demo() {
//     console.log(x);
//     if (true) {
//         var x = 5;
//     }
// }
// demo();


//  js code to check the first month's day name ::
// let functionDay = (date = new Date())=>{
//     let getDate = new Date(date);
//     getDate.setDate(1);

//     return getDate.toLocaleDateString('en-US',{weekday:'long'});
// }
// console.log(functionDay());
// functionDay();

// let lastDayOfMonth = (date = new Date())=>{
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let lastDate = new Date(year, month + 1, 0).getDate();

//     let lastdayName = new Date(date.setDate(lastDate));
//     return lastdayName.toLocaleString('en-us',{weekday:'long'});
// }

// console.log(lastDayOfMonth());



function innerFunction(value){
    let mainValue = value;

    function innerMostFunction(){
        mainValue++;
        // console.log(mainValue);

        return mainValue;
    }
    // return innerMostFunction();
}



let a = innerFunction(10);
console.log(a);