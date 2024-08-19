/* Lower bound = First Index whose value is greater than or equals to the target */
function lowerBound(arr, target) {
  let answer = arr.length
  let begin = 0
  let end = arr.length - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] >= target) {
      answer = mid
      end = mid - 1
    } else begin = mid + 1
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return answer
}

function upperBound(arr, target) {
  let begin = 0
  let end = arr.length - 1
  let answer = arr.length
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] > target) {
      answer = mid
      end = mid - 1
    } else {
      begin = mid + 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return answer
}
const index = upperBound([2,3,6,7,8,8,8,11,11,11,12], 10)
console.log(index)
