/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

function getAverage(marks){
  const averageValue = marks.reduce((acc, item) => acc + item, 0) / marks.length
  return Math.floor(averageValue)
}

console.log(getAverage([2,2,2,2]))