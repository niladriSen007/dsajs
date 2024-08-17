/* Lower bound = Index whose value is greater than or equals to the target */
function lowerBound(arr, target) {
  let answer = arr.length
  let begin = 0
  let end = arr.length - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin < end) {
    if (arr[mid] >= target) {
      end = answer = mid
    } else begin = mid + 1
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return answer
}
const index = lowerBound([3, 5, 8, 15, 19], 2)
console.log(index)
