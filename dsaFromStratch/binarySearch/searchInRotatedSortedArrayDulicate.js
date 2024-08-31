function searchInRotatedSortedArrayDuplicate(arr, target) {
  let begin = 0
  let end = arr.length - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] == target) return true
    if (arr[begin] == arr[mid] && arr[mid] == arr[end]) {
      begin += 1
      end -= 1
      continue
    }
    if (arr[begin] <= arr[mid]) {
      if (arr[begin] <= target && target <= arr[mid]) {
        end = mid - 1
      } else {
        begin = mid + 1
      }
    } else {
      if (arr[mid] <= target && target <= arr[end]) {
        begin = mid + 1
      } else {
        end = mid - 1
      }
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return false
}

const index = searchInRotatedSortedArrayDuplicate([3, 1], 1)
console.log(index)
