Gotta Fetch'em All!
===================

![pikachu](https://media.giphy.com/media/W04QVzelTHsNW/giphy.gif)

## SWBATs

- [ ] Understand why we request data asynchronously
- [ ] Create `fetch` requests (including `GET`, `POST`, `PATCH`, `DELETE`)
- [ ] Manipulate the DOM in conjunction with `fetch` calls
- [ ] Understand optimistic vs pessimistic rendering

## Lecture Notes

### From CRUD to FETCH

| CRUD    | FETCH         |
|: ----- :|: ----------- :|
| Create  | POST          |
| Read    | GET           |
| Update  | PATCH or PUT  |
| Delete  | DELETE        |

[Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Single Page applications

* loading new content onto the page
* like Twitter

### Mocking your own API

- Our "server" is being faked with a package called [json-server](https://github.com/typicode/json-server). This package uses a local file, `db.json` to spin up a RESTful JSON API in about 30 seconds. To run your server:
  - `$ npm install -g json-server` this will install the node package (similar to a gem) globally `-g` on your machine
  - `$ json-server --watch db.json` this spins up the server, it will default to `localhost:3000`

### JSON Server Routes

```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```

To `POST` a new Pokemon:

```
body: JSON.stringify({
  "height": 10,
  "weight": 130,
  "id": 2,
  "name": "ivysaur",
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
    "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  }
})
```

### Deliverables (User Stories)

Expand the functionality of the JS Pokemon Search Assignment!

- [ ] As a user, I should see all the Pokemon
- [ ] As a user, I should be able to delete a Pokemon on click of a button
- [ ] As a user, I should be able to create your own Pokemon
- [ ] As a user, I should be able to edit a clicked Pokemon

### Sample Markdown

- We've also included a sample of the HTML that you can use to style your pokemon cards:

```html
<div class="pokemon-container">
  <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
    <h1 class="center-text">ivysaur</h1>
    <div style="width:239px;margin:auto">
      <div style="width:96px;margin:auto">
        <img data-id="2" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png">
      </div>
    </div>
  </div>
</div>
```

### Extra Notes

#### Fetching

* data **HAS** to be a string in a `POST`, `PUT`, or `PATCH` fetch

#### Optimistic Rendering vs Promise Callback

* You can manipulate the DOM synchronously (outside the `.then()`)
* This is referred to as optimist rendering because you are not waiting for the async response to resolve
* Or you can manipulate the DOM asynchronously (inside the `.then()`) using the response from the server
* This is make sure the data on your page is consistent with the database
