/* Question Statement -Floor of 'x' is the largest element in the array which is smaller than or equal to 'x'.
Ceiling of 'x' is the smallest element in the array greater than or equal to 'x'. */

function ceilAndFloor(arrLength, target, arr) {
  let floor = -1
  let ceil = -1
  let begin = 0
  let end = arrLength - 1
  let mid = Math.floor(begin + (end - begin) / 2)
  while (begin <= end) {
    if (arr[mid] == target) return { floor: mid, ceil: mid }
    if (arr[mid] < target) {
      floor = mid
      begin = mid + 1
    } else {
      ceil = mid
      end = mid - 1
    }
    mid = Math.floor(begin + (end - begin) / 2)
  }
  return { floor, ceil }
}

let arr = [3, 4, 4, 7, 8, 10]
let { floor, ceil } = ceilAndFloor(6, 5, arr)
console.log(floor > 0 ? arr[floor] : floor , ceil > 0 ?  arr[ceil] : ceil)
