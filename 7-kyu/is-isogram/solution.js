function isIsogram (str) {
  const newStr = str.toLowerCase()
  return newStr.split('').every((item, index, arr) => index === arr.findIndex((element) => element === item))
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('moOse'))
console.log(isIsogram('isIsogram'))

/* alternative decision through Set

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
} */
