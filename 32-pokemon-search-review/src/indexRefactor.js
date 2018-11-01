document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
  const pokemonContainerForRenderingCards = document.querySelector('#pokemon-container')
  const pokemonSearchInputField = document.querySelector('#pokemon-search-input')

  fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
      pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(allPokemonData)
    })

    pokemonSearchInputField.addEventListener('input', (event) => handleSearchInput(event, allPokemonData, pokemonContainerForRenderingCards))

    pokemonContainerForRenderingCards.addEventListener('click', (event) => handleImgClick(event, allPokemonData))

})
