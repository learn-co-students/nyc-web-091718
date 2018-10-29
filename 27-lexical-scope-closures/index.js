/**************** Lexical Scoping ************************/

const name = 'squidward'

function sayName() {
  console.log(name)
}

sayName()

function sayNameLocal() {
  const name = 'Plankton'
  console.log(name)
}

sayNameLocal()

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

superDuperLocalVar()()()

// console.log(title) //title is not defined
/*******************************************************/

/*******************JS Scopes***************************/
/*******************Global***************************/

const mascot = 'Tony the Tiger™️'


/*******************Function***************************/

function getCereal() {
  const chocula = 'count chocula™'
  console.log(`I like 2 eat cereal made by ${chocula}`)
  return function nestedCereal() {
    const lucky = 'leprechaun'
    console.log(`I like 2 eat cereal made by ${lucky}`)
  }
}

getCereal()()

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

console.log(fruit)

fruit = 'mango' //reassigning fruit
console.log(fruit)

var fruit = function() { //redeclaring and reassigning
  return 'not a fruit lol ur app is broken and u dont know why'
}

console.log(fruit())

// let fruit = 'apple' let can only be declared ONCE
//let can be reassigned as many times as I want!

let vegetable = 'cucumber'

console.log(vegetable)

vegetable = 'carrot' //let can be reassigned but not redeclared

console.log(vegetable)

// let can only be declared once PER LEXICAL SCOPE
//let vegetable = 'avocado' //vegetable has already been declared

if (true) {
  let vegetable = 'asparagus'
}

const miscellaneous = 'various assorted things'

// miscellaneous = 'regular assorted things' //error: assignment to constant variable

// const miscellaneous = 'some unexpected thing' //error: Identifier 'miscellaneous' has already been declared

/////////////****** HOISTING *******////////////


//****** First Class Functions ******************//
