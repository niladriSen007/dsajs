const factorial = (num) =>{
    if( num === 0 || num ===1)
        return  1;
    let res = 1
    for(let x=num;x>=1;x--)
        res *= x;
    return res
}

const factorialNum = factorial(3)
console.log(factorialNum)