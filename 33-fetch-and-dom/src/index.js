document.addEventListener('DOMContentLoaded', () => {
  /*****************************************************************************
   * All of our variables and data.
   ****************************************************************************/
  let allPokemonData = []
  const pokemonContainerForRenderingCards = document.querySelector('#pokemon-container')
  const pokemonSearchInputField = document.querySelector('#pokemon-search-input')


  /*****************************************************************************
   * On load fetch actions
   ****************************************************************************/
  fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
      pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(allPokemonData)
    }) //end of GET all Pokemon FETCH


  /*****************************************************************************
   * Event Listeners
   ****************************************************************************/
  pokemonSearchInputField.addEventListener('input', (event) => {
    const userSearchTerm = event.target.value
    const filteredPokemon = allPokemonData.filter((pokemonObject) => {
      return pokemonObject.name.includes(userSearchTerm.toLowerCase())
    })
    pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(filteredPokemon)
  }) //end search input event listener

  pokemonContainerForRenderingCards.addEventListener('click', (event) => {
    if (event.target.name === 'flip') {
      const clickedPokemon = allPokemonData.find((pokemonObject) => {
        return pokemonObject.id == event.target.dataset.id
      })
      event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
    }
  }) // end sprite toggle event listener
})


/*******************************************************************************
 * Helper functions
 ******************************************************************************/
const renderAllPokemon = /*FUNCTION*/ (pokemonArray) => {
  return pokemonArray.map((pokemon) => {
    return `
    <div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img name="flip" data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
        <button class="pokebutton" style="width: 230px;margin:auto;">Delete</button>
      </div>
    </div>
    `
  }).join('')
}
