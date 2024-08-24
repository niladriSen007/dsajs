/* Question Link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
Question Description - Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity. */

function findFirstIndex(arr, target) {
  let begin = 0
  let end = arr.length - 1
  let firstIndex = -1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] == target) {
      firstIndex = mid
      end = mid - 1
    } else if (arr[mid] < target) {
      begin = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return firstIndex
}
function findLastIndex(arr, target) {
  let begin = 0
  let end = arr.length - 1
  let lastIndex = -1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] == target) {
      lastIndex = mid
      begin = mid + 1
    } else if (arr[mid] < target) {
      begin = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return lastIndex
}

function findFirstAndLastPosition(arr, target) {
  let firstIndex = findFirstIndex(arr, target)
  let lastIndex = findLastIndex(arr, target)

  return [firstIndex, lastIndex]
}

let [firstIndex, lastIndex] = findFirstAndLastPosition([2,4,6,8,8,8,11,13], 10)
console.log(firstIndex, lastIndex)
