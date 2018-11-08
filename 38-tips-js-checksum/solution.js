// i need to find the largest and smallest val from each array
// i then need to find the differences between them
// i then need to return the sum of all these differences

const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

// mapped over data, return diff
function mapAndSum(data) {
  const allDiffs = data.map((nestedArr) => {
    // apply takes in two args: the object i want to bind to, an array of any args
    // return Math.max.apply(null, nestedArr) - Math.min.apply(null, nestedArr)
    return Math.max(...nestedArr) - Math.min(...nestedArr)
  })
  console.log(allDiffs) //[292, 408, 232, 6255, 5944]
  return allDiffs.reduce((sum, currNum) => (sum + currNum), 0)
}

console.log(mapAndSum(data))

// for loop
function forLoop(data) {
  let sum = 0
  for (let i = 0; i < data.length; i++) {
    // const currentArr = data[i]
    // console.log(currentArr)
    // const largestNum = Math.max.apply(null, currentArr)
    // const smallestNum = Math.min.apply(null, currentArr)
    // sum += largestNum - smallestNum
    sum += (Math.max(...data[i]) - Math.min(...data[i]))
  }
  return sum
}

console.log(forLoop(data))

function sumArr(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

function doubleForLoop(data) {
  let diffs = []
  for (let i = 0; i < data.length; i++) {
    // set min and max to first value of our array of arrays
    let min = data[i][0]
    let max = data[i][0]
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] < min) min = data[i][j]
      if (data[i][j] > max) max = data[i][j]
    } //end of inner for loop
    diffs.push(max - min)
  } //end of outer for loop
  return sumArr(diffs) //sumArr is our helpr fn
}


console.log(doubleForLoop(data))

function maxAndMinDiff(row) {
  let maxVal = Math.max(...row)
  let minVal = Math.min(...row)
  return maxVal - minVal
}

function iMissRuby/*💓*/(data) {
  let sum = 0
  data.forEach((row) => {
    sum += maxAndMinDiff(row)
  })
  return sum
}

console.log(iMissRuby(data))

function calculateRowDiff(sum, row) {
  return sum + Math.max(...row) - Math.min(...row)
}

function oneReduce(data) {
  return data.reduce(calculateRowDiff, 0)
}


console.log(oneReduce(data))
