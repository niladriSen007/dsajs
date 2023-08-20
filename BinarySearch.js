const BinarySearch = (arr, elem) => {
  let begin = 0;
  let end = arr.length - 1;
  let mid = begin + (end - begin) / 2;
  while (begin <= end) {
    if (arr.at(mid) === elem) return mid;
    if (elem < arr.at(mid)) end = mid - 1;
    else begin = mid + 1;
    mid = Math.floor((begin + end) / 2);
  }
};

const array = [1,2,3,4,5,6,7]
const searchElemIndex = BinarySearch(array,3)
console.log(searchElemIndex)  
