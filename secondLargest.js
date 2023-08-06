const secondLargest = (arr) => {
  if (arr.length > 1) {
    const newSet = [...new Set(arr)];
    const sortedArr = newSet.sort((a, b) => a - b);
    return sortedArr.at(sortedArr.length - 2);
  }
  else
    return -1;
};

const optimizedSecondLargest = (arr) =>{
  let largest = -1;
  let secondLargest = -1;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i] > largest)
      largest = arr[i]
  }
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i] > secondLargest && arr[i] < largest)
      secondLargest = arr[i]
  }

  return secondLargest;
}
const optimizedSecondLargestSecondWay = (arr) =>{
  let largest = -1;
  let secondLargest = -1;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i] > largest){
      secondLargest = largest
      largest = arr[i]
    }
    else if(arr[i] > secondLargest && arr[i] < largest)
      secondLargest = arr[i]
  }

  return secondLargest;
}

const arr = [1,11,2,33,44,44,5,1];
const res = optimizedSecondLargestSecondWay(arr);
console.log(res === -1 ? "Only one element in this array" : res);
