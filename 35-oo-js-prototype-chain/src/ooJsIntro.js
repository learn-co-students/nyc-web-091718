// object literals

const robot1 = { name: 'r2d2', weight: 500, specialty: 'complaining' }
const robot2 = { name: "mark 'the zucc' zuckerberg", weight: 125, specialty: 'data' }
const robot3 = { name: 'Terminator', weight: 50000, specialty: 'terminating' }

// factory function

function robotFactoryFn(name, weight, specialty) {
  // return { name: name, weight: weight, specialty: specialty }
  return { name, weight, specialty }
}
//create new 'instances' using our factory fn
const bender = robotFactoryFn('bender', 800, 'bending things')

function learn(robotObj, skill) {
  return `${robotObj.name} is learning ${skill}!`
}

console.log(learn(bender, 'cooking'))

function robotFactoryFnWithMethod(name, weight,specialty) {
  return {
    name,
    weight,
    specialty,
    learn: function(skill) {
      return `${this.name} is learning ${skill}`
    }
  }
}


const optimusPrime = robotFactoryFnWithMethod('Optimus Prime', 9999999, 'transforming')
const selfDestructoBot = robotFactoryFnWithMethod('Destructo', 6, 'self destruction')

console.log(optimusPrime.learn('knitting'))
console.log(selfDestructoBot.learn('repair'))

console.log(optimusPrime.learn === selfDestructoBot.learn)

const roboTemplate = {
  name: null,
  weight: null,
  specialty: null,
  destroyAllHumans: function() {
    return `${this.name} is destroying all H U M A N S!`
  }
}


const bumbleBee = Object.create(roboTemplate)
bumbleBee.name = 'Bumble Bee'
bumbleBee.weight = 10000
bumbleBee.specialty = 'buzzing'
const roboTron = Object.create(roboTemplate)
roboTron.name = 'DestroyeR bot'
roboTron.weight = 999
roboTron.specialty = 'history lessons @ disneyland'

bumbleBee
console.log(bumbleBee.destroyAllHumans)

console.log(bumbleBee.destroyAllHumans === roboTron.destroyAllHumans)


function roboFactoryWithObjCreate(name, weight, specialty) {
  const newRobo = Object.create(roboTemplate)
  newRobo.name = name
  newRobo.weight = weight
  newRobo.specialty = specialty
  return newRobo
}


const terminator = roboFactoryWithObjCreate('T2', 99999999999, 'time travel')

console.log(terminator.destroyAllHumans())

function robotConstructor(name, weight, specialty) {
  // inside constructor called w/ new, `this` points to the newly created obj: { }
  this.name = name
  this.weight = weight
  this.specialty = specialty
}

robotConstructor.prototype.dance = function() {
  return `${this.name} loves 2 dance the robot (lol)`
}

const megaMan = new robotConstructor('Mega Man', 500, 'underwater basket weaving')
const mrRoboto = new robotConstructor('Mr. Roboto', 250, 'D A N C I N G')

megaMan

console.log(mrRoboto.dance())

console.log(megaMan.dance === mrRoboto.dance)


class Robot {
  constructor(name, weight, specialty) {
    this.name = name
    this.weight = weight
    this.specialty = specialty
  }

  fly() {
    return `${this.name} is flying`
  }
}


const gundam = new Robot('gundam', Number.MAX_SAFE_INTEGER, 'fighting other giant robots IN SPACE')
const megazord = new Robot('the megazord', Number.MAX_SAFE_INTEGER, 'fighting giant monsters')

console.log(gundam.fly())
console.log(megazord.fly === gundam.fly)
