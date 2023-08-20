const recursiveFactorial = (num) =>{
    if(num < 2)
        return 1;
    return num * recursiveFactorial(num-1)
}

const fact = recursiveFactorial(5)
console.log(fact)