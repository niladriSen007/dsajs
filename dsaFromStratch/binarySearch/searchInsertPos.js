//This program is equivalent to the lower bound program
//Question link - https://leetcode.com/problems/search-insert-position/submissions/1361119676/?source=submission-ac
/* Question statement - Given a sorted array of distinct integers and a target value,
 return the index if the target is found. If not, return the index where it would be if it were inserted in order. */

function searchInsert(arr, target) {
  let begin = 0
  let end = arr.length - 1
  let answer = 0
  let mid = Math.floor(begin + (end - begin) / 2)

  while (begin <= end) {
    if (!arr.length) return 0
    if (arr[mid] == target) return mid
    if (arr[mid] < target) {
      answer = mid
      begin = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return target < arr[0] ? 0 : answer + 1
}

function searchInsertOptimized(arr, target) {
  let begin = 0
  let end = arr.length - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] == target) return mid
    if (arr[mid] > target) end = mid - 1
    else begin = mid + 1
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return begin
}

/* const index = searchInsert([-1, 3, 5, 6], 0) */
const index = searchInsertOptimized([-1, 3, 5, 6], 0)
console.log(index)
