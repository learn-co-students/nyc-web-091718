/////// CODE FROM THE REVIEW REFACTORED VERSION FOUND IN OTHER FILES ////////////



console.log('BEFORE DOM CONTENT LOADED', document.querySelector('#pokemon-container'))

document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = [] //our 'datastore'; save the data from the server so we don't have to keep fetching everytime we need this same array
  const pokemonContainerForRenderingCards = document.querySelector('#pokemon-container')
  const pokemonSearchInputField = document.querySelector('#pokemon-search-input')
  // i need to listen for typing on the input field
  // then update the DOM when that happens

  fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
    .then(/*FUNCTION*/(responseObject) => /*RETURN*/ responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData //save all the data from the server so we do not have to fetch it again
      pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(allPokemonData)
    }) //end of FETCH

  pokemonSearchInputField.addEventListener('input', (event) => {
    //event.target -> <input value="charizard"/>
    const userSearchTerm = event.target.value // 'charizard'
    const filteredPokemon = allPokemonData.filter((pokemonObject) => {
      // pokemonObject.name -> 'charizard'
      return pokemonObject.name.includes(userSearchTerm.toLowerCase())
    })
    pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(filteredPokemon)
  }) //end input event listener

  pokemonContainerForRenderingCards.addEventListener('click', (event) => {
    // event target will be the thing (node) that was clicked
    // we could also use if (event.target.nodeName === 'IMG')
    if (event.target.name === 'flip') {
      console.log(event.target, event.target.dataset.id, event.target.dataset)
      const clickedPokemon = allPokemonData.find((pokemonObject) => {
        // pokemonObject -> {id: 2, name: 'ivysaur'}
        // event.target.dataset.id -> "2"
        // is "2" === 2
        // in HTML -> data-id="2"
        // in JS -> dataset.id -> '2'
        // return pokemonObject.id === parseInt(event.target.dataset.id)
        return pokemonObject.id == event.target.dataset.id
      })
      event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
      // if (event.target.src === clickedPokemon.sprites.front) { //if the img is currently the front sprite
      //   event.target.src = clickedPokemon.sprites.back
      // } else {
      //   event.target.src = clickedPokemon.sprites.front
      // }
    }
  })
})



// simple, reusable fn that takes AN ARRAY of pokemon and produces N number of pokemon cards (HTML), where N is the number of pokemon (objects) in the array
const renderAllPokemon = /*FUNCTION*/ (pokemonArray) => {
  return pokemonArray.map((pokemon) => {
    // the return value of the callback passed to map will be added to the NEW ARRAY that map creates (see the DIY map below for details)
    return `
    <div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img name="flip" data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    </div>
    `
  }).join('') //map returns an array. we want to use a STRING to update our div's innerHTML. ['h', 'e', 'l', 'l', 'o'].join('') -> 'hello'
}

function renderAllPokemonFnKeyword(pokemonArray) {
  // [ {id: '2', name: 'ivysaur'} ]
  return pokemonArray.map(function(pokemon) {
    // whatever my map callback returns, will be pushed onto my map array
    return `
    <div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    </div>
    `
  }).join('')
}









// if we wanted to make our own ES6 Map FN (note that technically this would be defined on the Array.prototype but we'll learn about that next week):
function myMap(arr, callback) {
  let mappedData = []
  for (let i = 0; i < arr.length; i++) {
    mappedData.push(callback(arr[i]))
  }
  return mappedData
}
