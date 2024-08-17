function BinarySearch(arr, element) {
  let start = 0
  let end = arr.length
  let mid = Math.floor((start + end) / 2)

  while (start <= end) {
    if (arr[mid] == element) return mid
    if (element < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return -1
}

const index = BinarySearch([1, 2, 3, 4, 5, 6], 6)
console.log(index)
