class Adapter{
    constructor(apiUrl){
        this.url = apiUrl
    }

    getAll(){
        return fetch(this.url)
        .then(res => res.json())
    }

    getOne(pokeId){
        return fetch(`${this.url}/${pokeId}`)
        .then(res => res.json())
    }

    createOne(objToCreate){
        fetch(this.url, {
            method: "POST",
            body: JSON.stringify(objToCreate)
        })
    }
}

