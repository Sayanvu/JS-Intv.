function testRecurssion(n)
{
    if(n === 1 ||  n === 0){
        return 1;
    }
    else{
        return testRecurssion(n-1) * n;
    }
}
console.log(testRecurssion(5));