console.log('BEFORE DOM CONTENT LOADED', document.querySelector('#pokemon-container'))

document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
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
      const userSearchTerm = event.target.value
      const filteredPokemon = allPokemonData.filter((pokemonObject) => {
        // pokemonObject.name -> 'charizard'
        return pokemonObject.name.includes(userSearchTerm.toLowerCase())
      })
      pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(filteredPokemon)
    })


})




const renderAllPokemon = /*FUNCTION*/ (pokemonArray) => {
  return pokemonArray.map((pokemon) => {
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










function myMap(arr, callback) {
  let mappedData = []
  for (let i = 0; i < arr.length; i++) {
    mappedData.push(callback(arr[i]))
  }
  return mappedData
}
