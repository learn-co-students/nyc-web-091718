allDogs = []
selectedDog = {}
document.addEventListener('DOMContentLoaded', handleLoad)

function handleLoad(){
    fetchDogs()
    let dogBar = document.querySelector('#dog-bar')
    dogBar.addEventListener('click', handleDogBarClick)
    document.querySelector('#good-dog-filter').addEventListener('click', filterGoodDogs)
}

function filterGoodDogs(e){
    //select the button
    //then grab text from button 
    if (e.target.innerText.split(' ').slice(-1)[0] == "OFF"){
        document.querySelector('#good-dog-filter').innerText = "Filter good dogs: ON"
        let goodBois = allDogs.filter(function(dog){
            return dog.isGoodDog
        })
        putDogsOnPage(goodBois)
    } else {
        document.querySelector('#good-dog-filter').innerText = "Filter good dogs: OFF"
        putDogsOnPage(allDogs)
    }
   
}

function fetchDogs(){
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(dogs => {
        allDogs = dogs
        putDogsOnPage(allDogs)
    })
}


function putDogsOnPage(dogs){
    let dogBar = document.querySelector('#dog-bar')
    dogBar.innerHTML = ""
    dogs.forEach(function(dog){
        putSingleDogOnPage(dog)
    })
}

function putSingleDogOnPage(dog){
    let dogBar = document.querySelector('#dog-bar')
    dogBar.innerHTML += `<span class="doggy-div" data-id=${dog.id}>${dog.name}</span>`
}

function displayDog(dog){
    selectedDog = dog
    let dogInfo = document.querySelector('#dog-info')
    dogInfo.innerHTML = `
    <img src=${dog.image}>
    <h2>${dog.name}</h2>
    `
    if (dog.isGoodDog){
        //need to change from good dog to bad dog
        dogInfo.innerHTML +=  `<button data-id=${dog.id}>Good Dog!</button>`
    } else {
        //need to change from bad dog to good dog
        dogInfo.innerHTML +=  `<button data-id=${dog.id}>Bad Dog!</button>`
    }
    dogInfo.querySelector('button').addEventListener('click', handleGoodnessToggle)
}

function handleGoodnessToggle(){
    console.log("before", selectedDog.isGoodDog)
    selectedDog.isGoodDog = !selectedDog.isGoodDog
    displayDog(selectedDog)
    updateDogOnServer(selectedDog)
    // filterGoodDogs()
}

function handleDogBarClick(e){ 
    if(e.target.className === "doggy-div"){
        //first we have to find the dog 
        let dog = allDogs.find(function(dog){
            return dog.id == e.target.dataset.id
        }) 
        displayDog(dog)
    }
}

function updateDogOnServer(dog){
    console.log("after", dog.isGoodDog)
    let data = {
        isGoodDog: dog.isGoodDog
    }

    fetch(`http://localhost:3000/pups/${dog.id}`,{
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(something => console.log(something))
}