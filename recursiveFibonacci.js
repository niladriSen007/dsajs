const recursiveFibonacci = (n) =>{
    if( n <= 1 ) return n;
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

const fib = recursiveFibonacci(6)
console.log(fib)