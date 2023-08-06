const fibonacci =(n) =>{
    const fib = [0,1]
    if(n==2)
        return fib
    for(let x = 2;x<n;x++)
    {
        fib[x] = fib[x-1] + fib[x-2]
    }
    return fib;
}

const fibonacciSeries = fibonacci(2)
console.log(fibonacciSeries)