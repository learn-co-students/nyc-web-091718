function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

console.log('Starting the sleep function')
sleep(10)
console.log('Wow that sleep function took forever to run. 1 Star 🌟')

document.querySelector('#click-button').addEventListener('click', console.log)

// send a GET request to this endpoint; when it completes invoke the callback passed to .then

const quotesDiv = document.getElementById('quotes')
let quote = '' //declare global quote var

fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', {
  method: 'GET'
}).then(function(responseObj) {
  console.log(responseObj)
  return responseObj.json() //parse the JSON from the HTTP response obj
  // responseObj.json() returns a promise; i can only read that data in another .then callback fn
}).then(function(parsedJSON) { //invoke when json.parse() completes
  console.log(parsedJSON)
  quote = parsedJSON //assign quote to whatever we got back from the server
  appendQuoteToDom(parsedJSON)
  return 'hotdog'
}).then(function(string) {
  console.log(string) //does not return anything
}).then(function(wut) { //wut will therefore be undefined
  console.log(wut) //undefined
}).catch(function(error) {
  console.error('here is ur error', error)
})

// SAME AS ABOVE W/ ARROW FN
fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(resp => resp.json()).then(quote => console.log(quote))

try {
  console.log(THISISNOTAVARIABLE)
} catch (e) {
  console.log(e)
}

console.log('WILL I RUN B4 THE .THENS????????')
console.log('QUOTE IS: ', quote)

// function appendQuoteToDom(quote) {
//   const newPTag = document.createElement('p')
//   newPTag.innerText = quote
//   document.body.appendChild(newPTag)
// }

function appendQuoteToDom(quoteString) {
  console.log(quotesDiv.innerHTML)
  quotesDiv.innerHTML += `<p>${quoteString}</p>`
}
