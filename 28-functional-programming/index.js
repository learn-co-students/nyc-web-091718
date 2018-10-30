// arrow fns
const names = ['evans', 'andrew', 'humzah', 'zach']

const sayHelloFn = function(name) {
	console.log(`Hi ${name}`)
}

const sayHelloArrow = (name) => {
  console.log(`Hi ${name}`)
}

names.forEach(sayHelloArrow)

const explicitReturn = (num1, num2) => {
  return num1 * num2
}

// no curlies means implicit return
const implicitReturn = (num1, num2) => num1 * num2

const sayHi = () => {
  console.log('HOTDOG')
  return 'HI'
}

const runOnce = (function() {
  return 'DOLPHINS R SO SMART OMG 🐬'
})()



const createPrivateVar = (function() {
  let secretNumber = 12
  return function() {
    console.log(secretNumber)
  }
})()

const makePublicNumberSecret = (function(secretNum) {
  let secretNumber = secretNum
  return function() {
    console.log(secretNumber)
  }
})(12)


function impureChangeNames(namesArray) {
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i] = namesArray[i].toUpperCase()
  }
}

function pureChangeNames(namesArray) {
  const changedNames = []
  for (let i = 0; i < namesArray.length; i++) {
    changedNames.push(namesArray[i].toUpperCase())
  }
  return changedNames
}


const MYNUMS = [1, 2, 3]

function mutateMyNums() {
  for (var i = 0; i < MYNUMS.length; i++) {
    // MYNUMS[i] = MYNUMS[i] + 1
    // MYNUMS[i] += 1
    MYNUMS[i]++
  }
}

function doNotMutateMyNums() {
  const newNums = []
  for (var i = 0; i < MYNUMS.length; i++) {
    // MYNUMS[i] = MYNUMS[i] + 1
    // MYNUMS[i] += 1
    newNums.push(MYNUMS[i] + 1)
  }
  return newNums
}


const purelyIncrementNumsByOne = MYNUMS.map(function(num) {
  return num + 1
})
