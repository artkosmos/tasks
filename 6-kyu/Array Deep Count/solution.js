/* You are given an array.
Complete the function that returns the number of ALL elements within an array,
including any nested arrays. */

function deepCount(array) {
  let counter = 0
  array.forEach((element) => {
    if (!Array.isArray(element)) {
      counter += 1
    } else {
      counter += 1 + deepCount(element)
    }
  })
  return counter
}

console.log(deepCount([1, 2, [3, 4, [5]]]))
