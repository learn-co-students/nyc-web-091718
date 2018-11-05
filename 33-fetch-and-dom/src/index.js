/*******************************************************************************
 * Example of why you cannot trust the ordering of your fetch requests.
 * What order will the numbers be printed to the console?
 ******************************************************************************/
// console.log('#1: before I start fetching');
// fetch('http://localhost:4000/cat')
//   .then(response => response.json())
//   .then(json => {
//     console.log('%c #2: json', 'color: blue', json);
//   });
// fetch('http://localhost:4000/cat')
//   .then(response => response.json())
//   .then(json => {
//     console.log('%c #3: json', 'color: red', json);
//   });
// fetch('http://localhost:4000/cat')
//   .then(response => response.json())
//   .then(json => {
//     console.log('%c #4: json', 'color: pink', json);
//   });
// console.log('#5: done fetching');


document.addEventListener('DOMContentLoaded', () => {
  /*****************************************************************************
   * All of our variables and data.
   ****************************************************************************/
  let allPokemonData = []
  const pokemonContainerForRenderingCards = document.querySelector('#pokemon-container')
  const pokemonSearchInputField = document.querySelector('#pokemon-search-input')
  const pokemonPostForm = document.querySelector('#pokemon-post-form')
  const pokemonUrlInput = document.getElementById('sprite-input');
  let selectedPokemon = null;

  // As a user, I should be able to delete a Pokemon on click of a button
  /*
    get the button add event listener
    listens for a click
    .remove for div that's calling it
  */
  /*
    do another fetch request somewhere
    using the data from the form
    also, update allPokemonData <-- is because we're doing this
    also, update the DOM
  */

  /*****************************************************************************
   * On load fetch actions
   ****************************************************************************/
  fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
      pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(allPokemonData)
      // this is where it's finally on the DOM
      // get the button add event listener
    }) //end of GET all Pokemon FETCH
    // .then(() => {
    //   // go through the whole container,
    //   // find each button,
    //   // add event listeners
    // })

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
    } else if (event.target.dataset.action === "delete") {/* let's check that it's a delete action */
      // find the parent node
      const pokemonCard = event.target.parentElement.parentNode;
      const pokemonContainer = event.currentTarget;
      const id = pokemonCard.dataset.id;
      // optimistic rendering - is if the fetch fails, then the client is out of sync with the server
      // Reddit -
      // if updated the DOM immediately
      // in your cookie, it stored the things that still need to complete fetching
      // the fetch actually finished, it removed the queue item from the cookie

      // allPokemonData = allPokemonData.filter(pokemon => pokemon.id != id)
      // pokemonContainer.removeChild(pokemonCard);
      // DELETE IT FROM EVERYWHERE YOU HAVE THE DATA!
      // delete it from the global data - allPokemonData
      // also got to delete it from the API
      fetch(`http://localhost:3000/pokemon/${id}`,
        {
          method: 'DELETE'
        }
      )
        .then(response => {
          // pessimistic rendering - better unless you want super fast responsive interface
          // you don't care so much about the fetch
          if (response.ok) {
            allPokemonData = allPokemonData.filter(pokemon => pokemon.id != id)
            pokemonContainer.removeChild(pokemonCard);
          } /* else {
            throw CustomError()
          } */
        })
      // then remove the child from it
        //  .remove for div that's calling it
    } else {
      const pokemonContainer = event.currentTarget;
      const id = pokemonContainer.children[0].dataset.id;
      selectedPokemon = id;
      // debugger
      // pokemonUrlInput <-- update this with the data for the selected pokemon
      // also update the other input as well
      // then when i hit submit, I will check selectedPokemon and patch instead
    }
  }) // end sprite toggle event listener

  pokemonPostForm.addEventListener('submit', (event) => {
    // submits will try to POST!!! so everything refreshes!
    event.preventDefault();
    console.log(event);
    // optimistic vs pessimistic
    // postPokemon(event);
    fetch(`http://localhost:3000/pokemon/${selectedPokemon}`,
      {
        method: 'PATCH',
        // the header, among other things it does
        // it tells the server with 'Content-Type'
        // what type of string data, since body is always a string,
        // is being sent over
        // "application/json => means json type data for this application
        // charset=utf-8 => tells the server what type of character encoding
        //  pretty 8 doesn't handle asian chracters
        headers: { // dont forget these!!!!!
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          "name": 'PATCHED!'
        })
      }
    )
    // uypdate them all!!! O vs P
  })

})


/*******************************************************************************
 * Helper functions
 ******************************************************************************/
const renderAllPokemon = /*FUNCTION*/ (pokemonArray) => {
  return pokemonArray.map((pokemon) => {
    return `
      <div data-id="${pokemon.id}" class="pokemon-card">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img name="flip" data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
          </div>
          <button data-action="delete" class="pokebutton idontknow" style="width: 230px;margin:auto;">Delete</button>
        </div>
      </div>
    `
  }).join('')
}

const postPokemon = (event) => {
  fetch(`http://localhost:3000/pokemon`,
    {
      method: 'POST',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        "height": 10,
        "weight": 130,
        // "id": 2,
        "name": event.target.children[1].value, // HACK: super hacky, add to form, it breaks!
        "abilities": ["overgrow", "chlorophyll"],
        "moves": [],
        "stats": [
          {
            "value": 80,
            "name": "special-defense"
          },
          {
            "value": 80,
            "name": "special-attack"
          },
          {
            "value": 63,
            "name": "defense"
          },
          {
            "value": 62,
            "name": "attack"
          },
          {
            "value": 60,
            "name": "speed"
          },
          {
            "value": 60,
            "name": "hp"
          }
        ],
        "types": ["grass", "poison"],
        "sprites": {
          "front": pokemonUrlInput.value,
          "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
        }
      })
    }
  )
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(json => {
      // also, update allPokemonData <-- is because we're doing this
      allPokemonData.push(json);
      // also, update the DOM
      // 1. rerender it all!!!
      // pokemonContainerForRenderingCards.innerHTML = renderAllPokemon(allPokemonData);
      // 2. appendChild
      // construct the entire element
      // const pokemonElement = document.createElement(``)
      // pokemonContainerForRenderingCards.appendChild(pokemonElement)
      // 3. add to innerHTML
      pokemonContainerForRenderingCards.innerHTML += `
        <div data-id="${json.id}" class="pokemon-card">
          <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${json.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img name="flip" data-id="${json.id}" data-action="flip" class="toggle-sprite" src="${json.sprites.front}">
              </div>
            </div>
            <button data-action="delete" class="pokebutton idontknow" style="width: 230px;margin:auto;">Delete</button>
          </div>
        </div>
      `
    })
  // do another fetch request somewhere
  // using the data from the form
}
