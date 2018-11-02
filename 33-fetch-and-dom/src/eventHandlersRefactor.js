const handleSearchInput = (event, allPokemonData, pokemonContainerForRenderingCards) => {
  const userSearchTerm = event.target.value
  const filteredPokemon = allPokemonData.filter(pokemonObject => {
    return pokemonObject.name.includes(userSearchTerm.toLowerCase())
  })
  pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(filteredPokemon)
}


const handleImgClick = (event, allPokemonData) => {
  if (event.target.name === 'flip') {
    const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
    event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
  }
}

// could move thi to another file as well like rendermethods.js
const renderAllPokemon = (pokemonArray) => {
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
      </div>
    </div>
    `
  }).join('')
}
