function binarySearchRecursive(arr, start, end, target) {
  if (start > end) return -1
  let mid = Math.floor((start + end) / 2)
  if (arr[mid] == target) return mid
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, mid + 1, end, target)
  } else {
    return binarySearchRecursive(arr, start, mid - 1, target)
  }
}

const index = binarySearchRecursive([1, 2, 3, 4, 5, 6], 0, 5, 2)
console.log(index)
