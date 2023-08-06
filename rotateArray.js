const rotateArray = (arr,n) =>{
    // for(let i=0;i<n;i++){
    //     let last = arr.pop();
    //     arr.unshift(last);
    // }
    let deletedEleme = arr.splice(arr.length - n,n)
    arr.unshift(...deletedEleme)
    return arr;
}
const rotateArraySecond = (arr,n) =>{
    if(n === arr.length || n===0)
        return arr;
    let rotateActual = n % arr.length;
    let temp = 0;
    let subs = arr[0]
    for(let i=0;i<rotateActual;i++){
        for(let i=1;i<=arr.length;i++){
            temp = arr[i]
            arr[i] = subs
            subs = temp
        }
    }
    return arr;
}

const arr = [1,2,3,4,5,6,7];
const rotatedArr = rotateArray(arr,2)
console.log(rotatedArr)