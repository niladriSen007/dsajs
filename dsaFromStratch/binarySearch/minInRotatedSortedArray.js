function minInRotatedSortedArray(arr) {
  let begin = 0
  let end = arr.length - 1
  let min =Infinity
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[begin] <= arr[mid]) {
      if (arr[begin] <= min) {
        min = arr[begin]
      }
      begin = mid + 1
    } else {
      if (arr[mid] <= min) {
        min = arr[mid]
      }
      end = mid - 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return min
}

const index = minInRotatedSortedArray([6, 7, 1, 2, 3, 4, 5])
console.log(index)
