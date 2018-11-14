class Pokemon{
    constructor(pokemon){
        this.id = pokemon.id
        this.name = pokemon.name
        this.sprites = pokemon.sprites
        Pokemon.all.push(this)
    }

    render(){
        return `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${this.name}</h1>
            <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
                <img data-id="${this.id}" data-action="flip" class="toggle-sprite" src="${this.sprites.front}">
            </div>
            </div>
        </div>
        </div>`
    }

    static renderPokemons(pokemon=Pokemon.all){
        return pokemon.map(function(pokemon){
            return pokemon.render()
        })
    }

    static filterPokemons(filterString){
        console.log(pokemonsDiv)
        //figure out which pokemon have that string in their name 
        let filteredPokemon = Pokemon.all.filter(function(pokemon){
            return pokemon.name.includes(filterString)
        })
        //render the new array of pokemon
        return Pokemon.renderPokemons(filteredPokemon)
    }
}

Pokemon.all = []
