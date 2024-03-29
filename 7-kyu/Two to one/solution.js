/*
Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible, containing distinct letters -
each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"*/

function longest(s1, s2) {
  const uniqueLetters = [...new Set([...s1, ...s2])]
  return uniqueLetters
    .sort()
    .join('')
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
