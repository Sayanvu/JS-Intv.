function fibonaccinumber(_fib){

    if(_fib === 0 || _fib === 1){
        return _fib;
    }

    return fibonaccinumber(_fib-1) + fibonaccinumber(_fib-2); 
}

console.log(fibonaccinumber(3));
