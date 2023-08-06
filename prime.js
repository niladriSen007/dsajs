const checkPrime = (n) =>{
    if(n<=1)
        return -1;
    let counter = 0
    for(let i=1;i<=Math.sqrt(n);i++){
        if(n%i === 0)
            counter++;
    }
    return counter
}

let isPrime = checkPrime(1)
console.log(isPrime==1?"Prime Number ":"Not Prime")