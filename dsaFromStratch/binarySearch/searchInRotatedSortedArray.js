function searchInmRotatedSortedArray(arr, target) {
  let begin = 0
  let end = arr.length - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] == target) return mid
    if (arr[begin] <= arr[mid]) {
      if (arr[begin] <= target && target <= arr[mid]) {
        end = mid - 1
      } else {
        begin = mid + 1
      }
    } else {
      if (arr[mid + 1] <= target && target <= arr[end]) {
        begin = mid + 1
      } else {
        end = mid - 1
      }
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return -1;
}

const index = searchInmRotatedSortedArray( [1], 0)
console.log(index)
