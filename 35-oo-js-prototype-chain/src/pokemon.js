class Pokemon {
  constructor(id, name, sprites) {
    this.id = id
    this.name = name
    this.sprites = sprites
    Pokemon.all.push(this)
  }

  render() {
    return `
    <div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img name="flip" data-id="${this.id}" data-action="flip" class="toggle-sprite" src="${this.sprites.front}">
          </div>
        </div>
      </div>
    </div>
    `
  }
}


Pokemon.all = []
