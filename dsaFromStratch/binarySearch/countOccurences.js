function findFirstOccurance(arr, arrLength, target) {
  let begin = 0
  let end = arrLength - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  let firstOccurance = -1
  while (begin <= end) {
    if (arr[mid] == target) {
      firstOccurance = mid
      end = mid - 1
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      begin = mid + 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return firstOccurance
}
function findLastOccurance(arr, arrLength, target) {
  let begin = 0
  let end = arrLength - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  let lastOccurance = Infinity
  while (begin <= end) {
    if (arr[mid] == target) {
      lastOccurance = mid
      begin = mid + 1
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      begin = mid + 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return lastOccurance
}

function countOccurance(arr, arrLength, target) {
  let firstOccurance = findFirstOccurance(arr, arrLength, target)
  let lastOccurance = findLastOccurance(arr, arrLength, target)
  return lastOccurance - firstOccurance + 1
}

const count = countOccurance([1, 1, 2, 2, 2, 2, 2, 3], 8, 2)
console.log(count)
