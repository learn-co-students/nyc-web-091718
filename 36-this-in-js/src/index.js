window.name = 'window'

/************ Function Called with New Keyword ***********/
//inside a constructor fn, this will be the newly created object

function createPerson(name) {
  this.name = name
}

const evans = new createPerson('Evans')

console.log(evans)

class Person {
  constructor(name) {
    this.name = name
  }
}

const andrew = new Person('andrew')

/********************************************************/

/************ Bind Call Apply ****************************/

function whatIsThis() {
  return this
}

function listItems(item1, item2) {
  return `${this.name} likes ${item1} and ${item2}`
}

const dog = {
  name: 'winfield'
}

// bind will fix the value of this to whatever object is specified and return a BOUND COPY of our fn

const whatIsThisBoundToWinfield = whatIsThis.bind(dog)
// call will fix the value of `this` to the object specified AND invoke the fn, passing it any args
console.log(listItems.call(dog, 'carrots', 'peanut butter'))
console.log(listItems.apply(dog, ['carrots', 'peanut butter']))
console.log(listItems.apply({name: 'tiny'}, ['carrots', 'peanut butter']))


/********************************************************/

/************ Function called on an Object ***************/

const bird = {
  name: 'tweety bird',
  sayName: function() {
    return `${this.name} says hello`
  }
}


console.log(bird.sayName())
const copyOfBirdSayName = bird.sayName
console.log(bird.sayName === copyOfBirdSayName)
console.log(copyOfBirdSayName())

const anotherBird = {
  name: 'big',
  sayName: copyOfBirdSayName
}

console.log(anotherBird.sayName())

/********************************************************/

/************ Simple Function Call ***********************/
//a function called without a context. this will be the window
//default value of this/global value of this is the Window obj
function whatIsThisNoContext() {
  return this
}

console.log(whatIsThisNoContext())

/********************************************************/

/************ Arrow Functions ****************************/
const plant = {
  name: 'cactus friend',
  favSeasons: ['summer', 'spring'],
  sayName: () => {
    return this.name
  },
  listFavSeasons: function() {
    this.favSeasons.forEach(function(season) {
      // fn w/ fn keyword will evaluate `this`. Since the callback being passed to forEach does not have an execution context, `this` will be the window
      console.log(`${this.name} loves ${season}`)
    })
    this.favSeasons.forEach((season) => {
      console.log(`${this.name} loves ${season}`)
    })
  }
}

console.log(plant.sayName())

plant.listFavSeasons()

/********************************************************/

// why does this matter if we are writing OO code?

class PersonTwo {
  constructor(name, favFoods) {
    this.name = name
    this.favFoods = favFoods
  }
// listFavFoods will be treated like a fn w/ the function keyword
  listFavFoods() {
    // if method is called on an object, this will be the object on which it was called:
    // humzah.listFavFoods() -> this will be humzah
    this.favFoods.forEach((food) => { //arrow fn will absorb the outer `this`
      // since our arrow fn DOES NOT create its own this, `this` will be whatever it was OUTSIDE the callback passed to forEach -> humzah
      console.log(`${this.name} likes 2 eat ${food}`)
    })
  }
}


const humzah = new PersonTwo('Humzah 5000', ['pizza', 'hot sauce'])

humzah.listFavFoods()

copyOfListFoods = humzah.listFavFoods
