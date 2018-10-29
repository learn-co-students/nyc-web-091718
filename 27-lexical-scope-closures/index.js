/**************** Lexical Scoping ************************/

const name = 'squidward'

function sayName() {
  console.log(name)
}

sayName() //'squidward'

function sayNameLocal() {
  const name = 'Plankton'
  console.log(name)
}

sayNameLocal() //'Plankton'

function superDuperLocalVar() {
  const title = 'the art of war'
  return function inceptionFn1() {
    const title = 'the fart of thor'
    return function inceptionFn2WhereRWe() {
      const title = 'the chart of gore'
      console.log(`Name is: ${name} and title is ${title}`)
    }
  }
}

superDuperLocalVar()()() //'Name is: squidward and title is the chart of gore'

// console.log(title) //title is not defined
/*******************************************************/

/*******************JS Scopes***************************/
/*******************Global***************************/

const mascot = 'Tony the Tiger™️' //global var; accessible EVERYWHERE


/*******************Function***************************/

function getCereal() {
  const chocula = 'count chocula™'
  console.log(`I like 2 eat cereal made by ${chocula}`)
  return function nestedCereal() {
    const lucky = 'leprechaun'
    console.log(`I like 2 eat cereal made by ${lucky}`)
  }
}

//getCereal() // 'I like 2 eat cereal made by count chocula™'
getCereal()() // 'I like 2 eat cereal made by leprechaun'


// console.log(chocula) //chocula is not defined

/*******************Block***************************/

{ //curlies indicate block
  const candy = 'kit kat'
}

const pigs = { canFly: true } //curlies indicate object
if (pigs.canFly) { //curlies indicate block
  const candy = 'snickers/twix'
}

function functionName() { //curlies indicate function body

}

// console.log(candy) //candy is not defined


/*******************************************************/

/************** Var Let Const *********************/
var fruit = 'pear'

console.log(fruit) //'pear'

fruit = 'mango' //reassigning fruit
console.log(fruit) //'mango'

var fruit = function() { //redeclaring and reassigning
  return 'not a fruit lol ur app is broken and u dont know why'
}

console.log(fruit()) //'not a fruit lol ur app is broken and u dont know why'

// let fruit = 'apple' let can only be declared ONCE
//let can be reassigned as many times as I want!

let vegetable = 'cucumber'

console.log(vegetable) //'cucumber'

vegetable = 'carrot' //let can be reassigned but not redeclared

console.log(vegetable) //'carrot'

// let can only be declared once PER LEXICAL SCOPE
//let vegetable = 'avocado' //vegetable has already been declared

if (true) {
  let vegetable = 'asparagus'
}

const miscellaneous = 'various assorted things'

// miscellaneous = 'regular assorted things' //error: assignment to constant variable

// const miscellaneous = 'some unexpected thing' //error: Identifier 'miscellaneous' has already been declared

/////////////****** HOISTING *******////////////
// console.log(friends) //friends is not defined (not declared)
// let friends = 'friendos'
console.log(ubiquitous) //undefined
var ubiquitous = 'something that is everywhere (like JS!)'
console.log(ubiquitous) //'something that is everywhere (like JS!)'


makePancakes() //'I like 2 eat chocolate chip pancakes (nice)'

function makePancakes() {
  console.log('I like 2 eat chocolate chip pancakes (nice)')
}


if (true) {
  // variables declared without var/let/const BECOME GLOBAL🙀
  cookie = 'chocolate macadamia nut'
}

console.log(cookie) //'chocolate macadamia nut'


//****** First Class Functions ******************//

const sayHello = function(name) {
  console.log(`Hi ${name}!`)
}

sayHello('King Henry VIII') //'Hi King Henry VIII!'

function callMyCallback(functionCallback) {
  console.log(functionCallback())
}

function randomNum() {
  return Math.random()
}

callMyCallback(randomNum) //0.10505506641803053


callMyCallback(function() {
  return 'Hugs not drgs'
}) //'Hugs not drgs'


function higherOrderFn() {
  return function innerFn() {
    return 'Spongebob'
  }
}


console.log(higherOrderFn()()) //'Spongebob'

function myClosure() {
  const conscientious = 'hard 2 spell'
  return function innerFn() {
    console.log(conscientious)
  }
}

const myClosureReturnVal = myClosure()

myClosureReturnVal() //'hard 2 spell'


function createMultiplier(outerNum) {
  return function innerMultiplier(innerNum) {
    return outerNum * innerNum
  }
}

console.log(createMultiplier(5)(5)) //25

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(16)) //32
console.log(triple(16)) //48
