allPokemons = []
pokemonsDiv = null;
let pokeAdapter = new Adapter('http://localhost:3000/pokemon')

document.addEventListener('DOMContentLoaded', () => {
  pokemonsDiv = document.querySelector('#pokemon-container')
  pokemonSearch = document.querySelector('#pokemon-search-input')
  pokemonSearch.addEventListener('keyup', function(e){
    pokemonsDiv.innerHTML = Pokemon.filterPokemons(e.target.value)
  })
  pokeAdapter.getAll()
  .then(pokemons => {
    
    pokemons.forEach(function(pokemon){
      let tempPoke = new Pokemon(pokemon)
      allPokemons.push(tempPoke)
    })
    pokemonsDiv.innerHTML = Pokemon.renderPokemons(allPokemons)
  })
})















//   document.querySelector('#pokemon-search-input').addEventListener('keyup', function(e){
//     filterPokemonsBy(e.target.value)
//   })
//   pokemonsDiv = document.querySelector('#pokemon-container')

//   pokemonsDiv.addEventListener('click', handlePokeDivClick)
// })

// function addPokemonsToPage(pokemons){
//   pokemonsDiv.innerHTML = ''
//   pokemons.forEach(function(pokemon){
//     addPokemonToPage(pokemon)
//   })
// }

// function addPokemonToPage(pokemon){
//   pokemonsDiv.innerHTML += `<div class="pokemon-container">
//   <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
//     <h1 class="center-text">${pokemon.name}</h1>
//     <div style="width:239px;margin:auto">
//       <div style="width:96px;margin:auto">
//         <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
//       </div>
//     </div>
//   </div>
// </div>`
// }

// function filterPokemonsBy(filterString) {
//   let filteredPokemons = allPokemons.filter(function(pokemon){
//     return pokemon.name.includes(filterString)
//   })
//   console.log(filteredPokemons)
//   addPokemonsToPage(filteredPokemons)
// }

// function handlePokeDivClick(e){
//   console.log(e.target.dataset.id)
//   if (e.target.dataset.action === "flip"){
//     let clickedPoke = allPokemons.find((pokemon) => {
//       return pokemon.id == e.target.dataset.id
//     })
//     if (e.target.src === clickedPoke.sprites.front) {
//       e.target.src = clickedPoke.sprites.back
//     } else {
//       e.target.src = clickedPoke.sprites.front
//     }
//   }
// }



































//  document.addEventListener('DOMContentLoaded', () => {
  //   //fetch all pokes 
  //   Adapter.getAllPokemons()
  //   .then(pokemons => {
  //     pokemons.forEach((pokemon) => {
  //       new Pokemon(pokemon)
  //     })
  //     //display pokes
  //     Pokemon.displayPokemons()
  //   })
  //   //addEventListener for input
  //   let pokeSearch = document.querySelector('#pokemon-search-form')
  //   pokeSearch.addEventListener('keyup', function(e){
  //     let searchString = e.target.value
  //     Pokemon.filterPokemon(searchString)
  //   })
  // })